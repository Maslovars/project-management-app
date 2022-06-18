import { IAppUserState, IAuthStateErrors, IUserSignupState } from '@/types/data';

//export const API_ENDPOINT = 'http://localhost:4000';
export const API_ENDPOINT = 'https://kanban-rest77.herokuapp.com/';

export const UserSignupState: IUserSignupState = {
  user: null,
};

export const AppUserState: IAppUserState = {
  user: null,
};

export const AuthStateErrors: IAuthStateErrors = {
  errors: [],
};
