import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import { getMediceneHistoryActions } from "../../../src/redux/actions/adherence/getMedicineHistoryActions";
import { getMedHistorywatcherSaga, getMedHistorySaga } from "../../../src/redux/sagas/adherence/mediceneHistorySaga";
import adherences from "../../../src/redux/apis/adherence";

const initialData = {}
describe("test downloadPdfwatcherSaga", () => {
  const result = getMedHistorywatcherSaga()
  it("test login loading", () => {
    expect(result.next().value).toEqual(
      takeLatest(getMediceneHistoryActions. getMedicineHistoryRequest, getMedHistorySaga)
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
    const generator = jest.spyOn(adherences, "getmedhistory").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      getMedHistorySaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [getMediceneHistoryActions.getMedicineHistoryRequestSuccess(response.data)]
    );
    generator.mockClear();
  })
  it("should dispatch error action", async () => {
    const generator = jest.spyOn(adherences, "getmedhistory").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      getMedHistorySaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [getMediceneHistoryActions.getMedicineHistoryRequestFailure(undefined)]
    );
    generator.mockClear();
  })
})
