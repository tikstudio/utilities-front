export const EDIT_CALC_REQUEST = 'EDIT_CALC_REQUEST';
export const EDIT_CALC_SUCCESS = 'EDIT_CALC_SUCCESS';
export const EDIT_CALC_FAIL = 'EDIT_CALC_FAIL';


export function editCalc(data, id) {
  return {
    type: EDIT_CALC_REQUEST, payload: {data, id},
  };
}
