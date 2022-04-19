// npm test -- __tests__/components/SigninTest.js

import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../../components/SignInContainer'


describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button

      const onSubmit = jest.fn()
      const loginData = {
        name: "test10",
        password: "test10",
      }

      const component = render(<SignInContainer onSubmit={onSubmit} />)
      const { getByText, getByTestId } = component

      fireEvent.changeText(getByTestId('nameinput'), 'test10');
      fireEvent.changeText(getByTestId('passwordinput'), 'test10');
      const loginBtn = getByText('Submit')

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument

        fireEvent.press(loginBtn)
        // expect(onSubmit).toHaveBeenCalledTimes(1) // same thing as below
        expect(onSubmit.mock.calls).toHaveLength(1)
        expect(onSubmit.mock.calls[0][0]).toEqual(loginData);
      });
    });
  });
})