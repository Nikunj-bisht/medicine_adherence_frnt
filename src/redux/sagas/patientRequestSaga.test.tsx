import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import { patient } from "../apis/patientRequest";
import { getPatientRequestActions } from "../actions/patient/getPatientRequestActions";
import { patientreqwatcherSaga, patientReqSaga } from "../sagas/patientRequestSaga";

const initialData = {}
describe("test patientRequestSaga", () => {
  const result = patientreqwatcherSaga()
  it("test login loading", () => {
    expect(result.next().value).toEqual(
      takeLatest(getPatientRequestActions.getPatientRequest, patientReqSaga)
    )
  })
  it("should be done on next iteration", () => {
    expect(result.next().done).toBeTruthy();
  });
})
describe("testing patientRequestSaga", () => {
  const response = {
    data: "1"
  }
  it("should dispatch success action", async () => {
    const generator = jest.spyOn(patient, "patientReq").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      patientReqSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [getPatientRequestActions.getPatientRequestSuccess(response.data)]
    );
    generator.mockClear();
  })
  it("should dispatch error action", async () => {
    const generator = jest.spyOn(patient, "patientReq").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      patientReqSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [getPatientRequestActions.getPatientRequestFailure(undefined)]
    );
    generator.mockClear();
  })
})

