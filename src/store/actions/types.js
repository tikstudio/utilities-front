export const TYPES_REQUEST = 'TYPES_REQUEST';
export const TYPES_SUCCESS = 'TYPES_SUCCESS';
export const TYPES_FAIL = 'TYPES_FAIL';


export function fetchTypes() {
  return {
    type: TYPES_REQUEST, payload: {},
  };
}
