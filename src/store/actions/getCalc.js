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

export const GET_CALC_BY_ID_REQUEST = 'GET_CALC_BY_ID_REQUEST';
export const GET_CALC_BY_ID_SUCCESS = 'GET_CALC_BY_ID_SUCCESS';
export const GET_CALC_BY_ID_FAIL = 'GET_CALC_BY_ID_FAIL';

export function getCalcById(id) {
  return {
    type: GET_CALC_BY_ID_REQUEST,
    payload: {id},
  };
}