import axios from 'axios';

const DATA_AUTH = {
  username: 'intmed',
  password: 'challenge',
};

export const APILogin = () => {
  axios
    .post('/users/login', {
      DATA_AUTH,
    })
    .then((response) => {
      console.log('response data', response);
    });
};

export default APILogin;
