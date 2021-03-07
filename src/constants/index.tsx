export const ADD_TODO = 'ADD_TODO';
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ADD_TODO = typeof ADD_TODO;

export const TOGGLE_TODO = 'TOGGLE_TODO';
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type TOGGLE_TODO = typeof TOGGLE_TODO;

export const DELETE_TODO = 'DELETE_TODO';
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type DELETE_TODO = typeof DELETE_TODO;

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type SET_VISIBILITY_FILTER = typeof SET_VISIBILITY_FILTER;

export const SHOW_ALL = 'SHOW_ALL';
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type SHOW_ALL = typeof SHOW_ALL;

export const SHOW_ACTIVE = 'SHOW_ACTIVE';
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type SHOW_ACTIVE = typeof SHOW_ACTIVE;

export const SHOW_COMPLETED = 'SHOW_COMPLETED';
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type SHOW_COMPLETED = typeof SHOW_COMPLETED;

export type VisibilityFilter = SHOW_ALL | SHOW_ACTIVE | SHOW_COMPLETED;