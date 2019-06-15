export const GET_PEOPLES_REQUEST = 'GET_PEOPLES_REQUEST';
export const GET_PEOPLES_SUCCESS = 'GET_PEOPLES_SUCCESS';
export const GET_PEOPLES_FAIL = 'GET_PEOPLES_FAIL';


export function getPeoples(data, page, totalPage) {
  return {
    type: GET_PEOPLES_REQUEST, payload:
      {
        data,
        page,
        totalPage,
      },
  };
}
