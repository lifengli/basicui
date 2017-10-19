import { createAction } from 'redux-act';

export const getNaturalMap = createAction();
export const requestNaturalContent = createAction();
export const receiveNaturalContent = createAction();
const path = process.env.UI_BASE_PATH;

export function getNaturalContent() {
  return (dispatch) => {
    dispatch(requestNaturalContent());
    return fetch(`${path} /api/natural`)
      .then(response => {
        return (!response.ok ? {} : response.json());
      }, rejection => {
        return { status: 'an error occured' };
      })
      .then(response => {
        return dispatch(receiveNaturalContent(response));
      });
  };
}
