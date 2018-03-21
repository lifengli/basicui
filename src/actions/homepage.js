import { createAction } from 'redux-act';

export const homepageLayout = createAction('Set_Homepage_Layout');
export const requestHomepageContent = createAction('Request_Homepage_Content');
export const receiveHomepageContent = createAction('Receive_Homepage_Content');
const path = process.env.UI_BASE_PATH;

export function getHomepageContent() {
  return (dispatch) => {
    dispatch(requestHomepageContent());
    return fetch(`${path}/api/homepage`)
      .then(response => {
        return (!response.ok ? {} : response.json());
      }, rejection => {
        return { status: 'an error occured' };
      })
      .then(response => {
        return dispatch(receiveHomepageContent(response));
      });
  };
}
