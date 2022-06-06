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

export interface dndCreateTaskI {
  boardId: string;
  title: string;
  description: string;
  assigned: string;
  currentColumnId: string;
  order: number;
  id: string;
}

export interface deleteTaskI {
  boardId: string;
  columnId: string;
  id: string;
}

export interface dndDeleteTaskI {
  boardId: string;
  columnId: string;
  id: string;
  addParams: {
    boardId: string;
    title: string;
    description: string;
    assigned: string;
    currentColumnId: string;
    order: number;
    id: string;
  };
}

export interface changeTaskI {
  currentBoardId: string;
  title: string;
  currentOrder: number;
  description: string;
  assigned: string;
  currentColumnId: string;
  currentTaskId: string;
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
