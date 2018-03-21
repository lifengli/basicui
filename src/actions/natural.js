import { createAction } from 'redux-act';

export const getNaturalMap = createAction('Get_Natural_Map');
export const requestNaturalContent = createAction('Request_Natural_Content');
export const receiveNaturalContent = createAction('Receive_Natural_Content');
const path = process.env.UI_BASE_PATH;

export function getNaturalContent() {
  return (dispatch) => {
    dispatch(requestNaturalContent());
    return fetch(`${path}/api/natural`)
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
