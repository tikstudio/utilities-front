export const MANAGER_USERS_REQUEST = 'MANAGER_USERS_REQUEST';
export const MANAGER_USERS_SUCCESS = 'MANAGER_USERS_SUCCESS';
export const MANAGER_USERS_FAIL = 'MANAGER_USERS_FAIL';

export function manager(data) {
  return {
    type: MANAGER_USERS_REQUEST, payload: {data}
  }
}