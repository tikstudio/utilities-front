export const GET_REGIONS_REQUEST = 'GET_REGIONS_REQUEST';
export const GET_REGIONS_SUCCESS = 'GET_REGIONS_SUCCESS';
export const GET_REGIONS_FAIL = 'GET_REGIONS_FAIL';


export function getRegions(data, regions) {
  return {
    type: GET_REGIONS_REQUEST, payload: {data, regions},
  };
}
