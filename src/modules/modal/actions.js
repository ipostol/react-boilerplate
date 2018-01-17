import { createAction } from 'redux-act';

export const open = createAction(
  'OPEN_MODAL',
);

export const close = createAction(
  'CLOSE_MODAL',
);
