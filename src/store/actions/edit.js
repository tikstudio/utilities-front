export const EDIT_PEOPLE_REQUEST = 'EDIT_PEOPLE_REQUEST';
export const EDIT_PEOPLE_SUCCESS = 'EDIT_PEOPLE_SUCCESS';
export const EDIT_PEOPLE_FAIL = 'EDIT_PEOPLE_FAIL';


export function editPeople(data,id) {
  return {
    type: EDIT_PEOPLE_REQUEST, payload: {data,id},
  };
}
