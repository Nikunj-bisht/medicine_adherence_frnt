import Types from './adherence/allTypes';

export function fetchPatients(user_id: string) {
  return {
    type: Types.GET_PATIENTS,
    payload: user_id,
  };
}
export function fetchPatientsuccess(data) {
  console.log(data, 'success');
  return {
    type: Types.SUCCESS_GET_PATIENTS,
    payload: data,
  };
}
export function fetchPatienterror(error) {
  console.log(error, 'ac');
  return {
    type: Types.FAILED_TO_GET_PATIENTS,
    payload: error,
  };
}
export const myPatientsActions = {
  fetchPatients,
  fetchPatientsuccess,
  fetchPatienterror,
}
