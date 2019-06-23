export const GET_CALCULATORS_REQUEST = 'GET_CALCULATORS_REQUEST';
export const GET_CALCULATORS_SUCCESS = 'GET_CALCULATORS_SUCCESS';
export const GET_CALCULATORS_FAIL = 'GET_CALCULATORS_FAIL';


export function getCalc(data) {
  return {
    type: GET_CALCULATORS_REQUEST,
    payload:
      {
        data,
      },
  };
}