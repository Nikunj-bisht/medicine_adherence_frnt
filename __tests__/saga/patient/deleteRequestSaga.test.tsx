import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import { deleteRequest } from "../../../src/redux/apis/deleteRequest";
import { deletePatientActions } from "../../../src/redux/actions/patient/deletePatientRequestActions";
import { reqDeletewatcherSaga, reqDeleteSaga } from "../../../src/redux/sagas/patient/deleteRequestSaga";

const initialData = {}
describe("test reqDeletewatcherSaga", () => {
  const result = reqDeletewatcherSaga()
  it("test login loading", () => {
    expect(result.next().value).toEqual(
      takeLatest(deletePatientActions.deletePatientRequest, reqDeleteSaga)
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
    const generator = jest.spyOn(deleteRequest, "reqDelete").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      reqDeleteSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [deletePatientActions.deletePatientRequestSuccess(response.data)]
    );
    generator.mockClear();
  })
  it("should dispatch error action", async () => {
    const generator = jest.spyOn(deleteRequest, "reqDelete").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      reqDeleteSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [deletePatientActions.deletePatientRequestFailure(undefined)]
    );
    generator.mockClear();
  })
})