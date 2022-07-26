import Types from '../adherence/allTypes';

export function fetchpatientProfile(user_id: string) {
    return {
      type: Types.GET_PROFILE,
      payload: user_id,
    };
  }
  export function fetchpatientProfilesuccess(data) {
    console.log(data, 'success');
    return {
      type: Types.SUCCESS_GET_PROFILE,
      payload: data,
    };
  }
  export function fetchpatientProfilerror(error) {
    console.log(error, 'ac');
    return {
      type: Types.FAILED_GET_PROFILE,
      payload: error,
    };
  }
  export const patientProfileActions = {
    fetchpatientProfile,
    fetchpatientProfilesuccess,
    fetchpatientProfilerror
  }