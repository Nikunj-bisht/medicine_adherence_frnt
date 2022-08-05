import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import { syncDataActions } from "../../../src/redux/actions/adherence/syncDataActions";
import { syncMedwatcherSaga, syncMedSaga } from "../../../src/redux/sagas/adherence/syncDataSaga";
import adherences from "../../../src/redux/apis/adherence";

const initialData = {}
describe("test syncMedwatcherSaga", () => {
  const result = syncMedwatcherSaga()
  it("test login loading", () => {
    expect(result.next().value).toEqual(
      takeLatest(syncDataActions.postSyncData, syncMedSaga)
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
    const generator = jest.spyOn(adherences, "syncmeds").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      syncMedSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [syncDataActions.postSyncDatasuccess(response.data)]
    );
    generator.mockClear();
  })
  it("should dispatch error action", async () => {
    const generator = jest.spyOn(adherences, "syncmeds").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      syncMedSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [syncDataActions.postSyncDataerror(undefined)]
    );
    generator.mockClear();
  })
})