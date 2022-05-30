import { IAppUserState } from '@/types/data';

export function saveUserToLocalStorage(userState: IAppUserState): void {
  if (userState) {
    localStorage.setItem('user', JSON.stringify(userState));
  }
}

export function getCurrentUser(): IAppUserState | null {
  const userStateJson = localStorage.getItem('user');
  if (userStateJson) {
    const result = JSON.parse(userStateJson) as IAppUserState;
    return result;
  }
  return null;
}

export const logout = () => {
  localStorage.removeItem('user');
};

export function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token };
  } else {
    return {};
  }
}
