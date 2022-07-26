import {PatientProfileActions} from '../../../src/redux/actions/patient/patientProfileActions';
import Types from '../../../src/redux/actions/adherence/allTypes';
describe('test PatientProfileActions', () => {
  const data = '1';
  const err = 'SomeError';
  const string = 'user_id';
  it('test fetchPatientDetails', () => {
    expect(PatientProfileActions.fetchPatientDetails(string)).toEqual({
      type: Types.GET_PATIENT_DETAILS,
      payload: string,
    });
  });
  it('test fetchPatientDetailsSuccess', () => {
    expect(PatientProfileActions.fetchPatientDetailsSuccess(data)).toEqual({
      type: Types.SUCCES_PATIENT_DETAILS,
      payload: data,
    });
  });
  it('test fetchPatientDetailsError', () => {
    expect(PatientProfileActions.fetchPatientDetailsError(err)).toEqual({
      type: Types.FAILED_PATIENT_DETAILS,
      payload: err,
    });
  });
});