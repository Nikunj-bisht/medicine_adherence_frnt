import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import { reqCaretakerActions } from "../../../src/redux/actions/caretaker/reqCaretakerActions";
import { reqCaretakerwatcherSaga, reqCaretakerSaga } from "../../../src/redux/sagas/caretaker/reqCaretakerSaga";
import { careTaker } from "../../../src/redux/apis/careTaker";

const initialData = {}
describe("test reqCaretakerwatcherSaga", () => {
  const result = reqCaretakerwatcherSaga()
  it("test login loading", () => {
    expect(result.next().value).toEqual(
      takeLatest(reqCaretakerActions.sendReqCaretaker, reqCaretakerSaga)
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
    const generator = jest.spyOn(careTaker, "reqCaretaker").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      reqCaretakerSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [reqCaretakerActions.sendReqCaretakerSuccess(response.data)]
    );
    generator.mockClear();
  })
  it("should dispatch error action", async () => {
    const generator = jest.spyOn(careTaker, "reqCaretaker").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      reqCaretakerSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [reqCaretakerActions.sendReqCaretakerFailed(undefined)]
    );
    generator.mockClear();
  })
})