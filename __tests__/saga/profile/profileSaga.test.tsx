import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import { patient } from "../../../src/redux/apis/patientProfile";
import { patientProfileActions } from "../../../src/redux/actions/profile/patientProfileActions"
import { patientProfilewatcherSaga, patientProfileSaga } from "../../../src/redux/sagas/profile/profileSaga";

const initialData = {}
describe("test patientProfilewatcherSaga", () => {
  const result = patientProfilewatcherSaga()
  it("test login loading", () => {
    expect(result.next().value).toEqual(
      takeLatest( patientProfileActions.fetchpatientProfile, patientProfileSaga)
    )
  })
  it("should be done on next iteration", () => {
    expect(result.next().done).toBeTruthy();
  });
})
describe("testing loginSaga", () => {
  const response = {
    data: "1"
  }
  it("should dispatch success action", async () => {
    const generator = jest.spyOn(patient, "patientProfile").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      patientProfileSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [patientProfileActions.fetchpatientProfilesuccess(response.data)]
    );
    generator.mockClear();
  })
  it("should dispatch error action", async () => {
    const generator = jest.spyOn(patient, "patientProfile").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      patientProfileSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [ patientProfileActions.fetchpatientProfilerror(undefined)]
    );
    generator.mockClear();
  })
})