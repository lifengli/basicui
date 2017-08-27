import { createAction } from 'redux-act';

export const getNavigationMap = createAction();
export const requestNavigationContent = createAction();
export const receiveNavigationContent = createAction();
const path = process.env.UI_BASE_PATH;

export function getNavigationContent() {
  return (dispatch) => {
    dispatch(requestNavigationContent());
    return fetch(`${path} /api/navigation`)
      .then(response => {
        return (!response.ok ? {} : response.json());
      }, rejection => {
        return { status: 'an error occured' };
      })
      .then(response => {
        return dispatch(receiveNavigationContent(response));
      });
  };
}
