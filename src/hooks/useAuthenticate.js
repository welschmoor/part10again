// this hook is not used anywhere

import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';


const useAuthenticate = () => {
  const [authenticate, { loading }] = useMutation(AUTHENTICATE)


  return [authenticate, { loading }]
}

export default useAuthenticate