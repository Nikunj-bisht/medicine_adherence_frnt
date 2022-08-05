import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import { caretakerActions } from "../../../src/redux/actions/caretaker/caretakerActions";
import { caretakerwatcherSaga, caretakerSaga } from "../../../src/redux/sagas/caretaker/caretakerSaga";
import { careTaker } from "../../../src/redux/apis/careTaker";

const initialData = {}
describe("test caretakerwatcherSaga", () => {
  const result = caretakerwatcherSaga()
  it("test login loading", () => {
    expect(result.next().value).toEqual(
      takeLatest(caretakerActions.fetchCaretakers, caretakerSaga)
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
    const generator = jest.spyOn(careTaker, "caretaker").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      caretakerSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [caretakerActions.fetchCaretakerssuccess(response.data)]
    );
    generator.mockClear();
  })
  it("should dispatch error action", async () => {
    const generator = jest.spyOn(careTaker, "caretaker").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      caretakerSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [caretakerActions.fetchCaretakerserror(undefined)]
    );
    generator.mockClear();
  })
})
