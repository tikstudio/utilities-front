export const REGISTRATION_PEOPLE_REQUEST = 'REGISTRATION_PEOPLE_REQUEST';
export const REGISTRATION_PEOPLE_SUCCESS = 'REGISTRATION_PEOPLE_SUCCESS';
export const REGISTRATION_PEOPLE_FAIL = 'REGISTRATION_PEOPLE_FAIL';


export function registrationPeople(data) {
    return {
        type: REGISTRATION_PEOPLE_REQUEST, payload: {data},
    };
}