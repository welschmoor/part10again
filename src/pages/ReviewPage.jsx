
import { Text, StyleSheet, ScrollView } from "react-native"
import ReviewForm from "../components/ReviewForm/ReviewForm";
import { Formik } from "formik"
import * as yup from 'yup';
import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";
import { AM_I_SIGNEDIN } from "../graphql/queries";

const validationSchema = yup.object().shape({
  owner: yup
    .string()
    .min(3, 'Name must be at least 3 chars long')
    .required('Repository owner is required'),
  repname: yup
    .string()
    .min(3, 'Repository name must be longer than 3 characters')
    .required('Repository is required'),
  rating: yup
    .number()
    .min(0, 'Rating must be between 0 and 100')
    .max(100, 'Rating must be between 0 and 100')
    .required('Rating is required'),
  reviewText: yup
    .string()
    .min(3, 'Your review text must be longer than 3 characters')
    .required('Your review text is required'),
});

const initialValues = {
  owner: "",
  repname: "",
  rating: "",
  reviewText: "",
}


const ReviewPage = () => {
  const navigate = useNavigate()
  const [submitReview, { loading }] = useMutation(CREATE_REVIEW)

  const onSubmit = async (values) => {
    console.log("values<>", values)
    const review = {
      ownerName: values.owner,
      repositoryName: values.repname,
      rating: Number(values.rating),
      text: values.reviewText,
    }

    const response = await submitReview({
      variables: {
        review: review
      },
      refetchQueries: [{
        query: AM_I_SIGNEDIN,
        variables: {
          includeReviews: true
        }
      }]
    })

    console.log('response.data<><>', response.data.createReview.repositoryId)
    navigate(`/repository/${response.data.createReview.repositoryId}`)
  };

  return (
    <ScrollView style={s.container}>
      <Text style={s.text}>Leave a review!</Text>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </ScrollView>
  )
}


const s = StyleSheet.create({
  container: {
    padding: 20,
    // flex: 1,
    backgroundColor: "white"
  },
  text: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "500"
  }
})


export default ReviewPage