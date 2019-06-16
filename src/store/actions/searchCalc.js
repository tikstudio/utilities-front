export const SEARCH_CALCULATORS_REQUEST = 'SEARCH_CALCULATORS_REQUEST';
export const SEARCH_CALCULATORS_SUCCESS = 'SEARCH_CALCULATORS_SUCCESS';
export const SEARCH_CALCULATORS_FAIL = 'SEARCH_CALCULATORS_FAIL';

export function searchCalc(data, peopleData, search) {
  return {
    type: SEARCH_CALCULATORS_REQUEST, payload:
      {
        data,
        peopleData,
        search,
      },
  };
}
