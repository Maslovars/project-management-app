export interface TaskTypes {
  id: number;
  title: string;
  description: string;
  avatar: string;
  name: string;
  fileImage: string;
}

export interface TaskListTypes {
  tasks: TaskTypes[];
}
