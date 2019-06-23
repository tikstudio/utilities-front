export const DESTROY_CALC_REQUEST = 'DESTROY_CALC_REQUEST';
export const DESTROY_CALC_SUCCESS = 'DESTROY_CALC_SUCCESS';
export const DESTROY_CALC_FAIL = 'DESTROY_CALC_FAIL';


export function destroyCalc(data) {
  return {
    type: DESTROY_CALC_REQUEST, payload: {data},
  };
}
