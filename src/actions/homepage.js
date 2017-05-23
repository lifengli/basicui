import { createAction } from 'redux-act';

export const homepageLayout = createAction();
export const requestHomepageContent = createAction();
export const receiveHomepageContent = createAction();

export function getHomepageContent() {
  return (dispatch) => {
    dispatch(requestHomepageContent());
    // return fetch(process.env.UI_BASE_PATH + '/api/homepage')
    return fetch('/api/homepage')
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
