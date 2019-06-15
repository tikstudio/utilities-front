export const DESTROY_PEOPLE_REQUEST = 'DESTROY_PEOPLE_REQUEST';
export const DESTROY_PEOPLE_SUCCESS = 'DESTROY_PEOPLE_SUCCESS';
export const DESTROY_PEOPLE_FAIL = 'DESTROY_PEOPLE_FAIL';


export function destroyPeoples(data) {
  return {
    type: DESTROY_PEOPLE_REQUEST, payload: {data},
  };
}
