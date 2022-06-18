export interface deleteColumnI {
  boardId: string;
  id: string;
}

export interface createColumnI {
  boardId: string;
  title: string;
}

export interface createTaskI {
  boardId: string;
  title: string;
  description: string;
  assigned: string;
  currentColumnId: string;
}

export interface deleteTaskI {
  boardId: string;
  columnId: string;
  id: string;
}

export interface changeTaskI {
  currentBoardId: string;
  title: string;
  currentOrder: number;
  description: string;
  assigned: string;
  currentColumnId: string;
  currentTaskId: string;
  newColumnId?: string;
}

export interface changeColumnTitleI {
  boardId: string;
  columnId: string;
  title: string;
  columnOrder: number;
}

export interface changeColumnOrderI {
  boardId: string;
  columnId: string;
  title: string;
  columnOrder: number;
}
