export const SEARCH_PEOPLES_REQUEST = 'SEARCH_PEOPLES_REQUEST';
export const SEARCH_PEOPLES_SUCCESS = 'SEARCH_PEOPLES_SUCCESS';
export const SEARCH_PEOPLES_FAIL = 'SEARCH_PEOPLES_FAIL';

export function searchPeoples(data, search, people) {
  return {
    type: SEARCH_PEOPLES_REQUEST, payload:
      {
        data,
        search,
        people,
      },
  };
}