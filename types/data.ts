export interface BoardType {
  id: string;
  title: string;
  description: string;
  columns: ColumnTypes[];
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
