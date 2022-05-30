export interface BoardType {
  id: string;
  title: string;
  description: string;
}

export interface ColumnTypes {
  id: string;
  title: string;
  order: number;
  tasks: TaskTypes[];
}

export interface FileType {
  filename: string;
  fileSize: number;
}

export interface TaskTypes {
  id: string;
  title: string;
  done: boolean;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
  files: FileType[];
}

export interface TaskListTypes {
  tasks: TaskTypes[];
}

export interface NewUser {
  name: string;
  login: string;
  password: string;
}

export interface ApiErrorDetails {
  message: string;
  path: [];
}

export interface UserLogIn {
  login: string;
  password: string;
}

export interface UserState {
  token: string;
  name: string;
  id: string;
  login: string;
}

export interface IUserSignup {
  name: string;
  id: string;
  login: string;
}

export interface IUserSignupState {
  user: IUserSignup | null;
}

export interface IAppUserState {
  user: UserState | null;
}

export interface IAuthStateErrors {
  errors: string[];
}
export interface BoardType {
  id: string;
  title: string;
  description: string;
}

export interface ColumnTypes {
  id: string;
  title: string;
  order: number;
  tasks: TaskTypes[];
}

export interface FileType {
  filename: string;
  fileSize: number;
}

export interface TaskTypes {
  id: string;
  title: string;
  done: boolean;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
  files: FileType[];
}

export interface TaskListTypes {
  tasks: TaskTypes[];
}
