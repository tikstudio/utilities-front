export const GET_PEOPLES_REQUEST = 'GET_PEOPLES_REQUEST';
export const GET_PEOPLES_SUCCESS = 'GET_PEOPLES_SUCCESS';
export const GET_PEOPLES_FAIL = 'GET_PEOPLES_FAIL';


export function getPeoples(data, page, totalPage) {
  return {
    type: GET_PEOPLES_REQUEST,
    payload:
      {
        data,
        page,
        totalPage,
      },
  };
}
export const GET_PEOPLE_BY_ID_REQUEST = 'GET_PEOPLE_BY_ID_REQUEST';
export const GET_PEOPLE_BY_ID_SUCCESS = 'GET_PEOPLE_BY_ID_SUCCESS';
export const GET_PEOPLE_BY_ID_FAIL = 'GET_PEOPLE_BY_ID_FAIL';

export function getPeopleById(id) {
  return {
    type: GET_PEOPLE_BY_ID_REQUEST,
    payload: {id},
  };
}
