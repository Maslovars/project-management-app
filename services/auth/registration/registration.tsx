import { API_ENDPOINT, AuthStateErrors, UserSignupState } from 'utils/constants';
import { NewUser, IUserSignup } from 'types/data';
import axios from 'axios';
import Router from 'next/router';

function updateAuthStateUser(userState: IUserSignup): void {
  UserSignupState.user = userState;
}

export async function createUser(newUser: NewUser): Promise<void> {
  AuthStateErrors.errors = [];
  await axios
    .post(`${API_ENDPOINT}signup`, JSON.stringify(newUser, null, 2), {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(function (response) {
      const content: IUserSignup = response.data;
      const userState = {
        id: content.id,
        name: content.name,
        login: content.login,
      };
      updateAuthStateUser(userState);
      Router.push('/login');
    })
    .catch(function (error) {
      AuthStateErrors.errors = [error.response.data.message];
    });
}
