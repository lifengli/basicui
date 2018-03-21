import { createAction } from 'redux-act';

export const getNavigationMap = createAction('Get_Navigation_Map');
export const requestNavigationContent = createAction('Request_Navigation_Content');
export const receiveNavigationContent = createAction('Receive_Navigation_Content');
const path = process.env.UI_BASE_PATH;

export function getNavigationContent() {
  return (dispatch) => {
    dispatch(requestNavigationContent());
    return fetch(`${path}/api/navigation`)
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
