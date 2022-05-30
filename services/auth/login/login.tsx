import { API_ENDPOINT, AppUserState, AuthStateErrors, UserSignupState } from 'utils/constants';
import { UserState } from 'types/data';
import axios from 'axios';
import Router from 'next/router';
import { UserLogIn } from 'types/data';
import { saveUserToLocalStorage } from '../services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function updateAppStateUser(userState: UserState): void {
  AppUserState.user = userState;
}

export async function logInUser(user: UserLogIn): Promise<void> {
  AuthStateErrors.errors = [];

  await axios
    .post(`${API_ENDPOINT}signin`, JSON.stringify(user, null, 2), {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(function (response) {
      const content = response.data;
      const userState = {
        token: content.token,
        id: UserSignupState.user.id,
        name: UserSignupState.user.name,
        login: UserSignupState.user.login,
      };
      updateAppStateUser(userState);
      saveUserToLocalStorage(AppUserState);
      Router.push('/main');
    })
    .catch(function (error) {
      if (error.response) {
        if (error.response.data.statusCode === 403) {
          const errorMessage = 'Please check login and password. Or welcome to sign up :)';
          AuthStateErrors.errors = [errorMessage];
          return;
        }
        AuthStateErrors.errors = [error.response.data.message];
      }
    });
}
