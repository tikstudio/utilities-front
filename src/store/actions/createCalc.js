export const CREATE_CALC_REQUEST = 'CREATE_CALC_REQUEST';
export const CREATE_CALC_SUCCESS = 'CREATE_CALC_SUCCESS';
export const CREATE_CALC_FAIL = 'CREATE_CALC_FAIL';


export function createCalc(data) {
  return {
    type: CREATE_CALC_REQUEST, payload: {data},
  };
}
