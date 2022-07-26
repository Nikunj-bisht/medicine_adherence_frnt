import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import { acceptRequest} from "../../../src/redux/apis/acceptRequest"; 
import { acceptRequestActions } from "../../../src/redux/actions/patient/acceptRequestActions";
import { reqAcceptwatcherSaga, reqAcceptSaga } from "../../../src/redux/sagas/patient/acceptRequestSaga";

const initialData = {}
describe("test reqAcceptwatcherSaga", () => {
  const result = reqAcceptwatcherSaga()
  it("test accept request", () => {
    expect(result.next().value).toEqual(
      takeLatest(acceptRequestActions .fetchAcceptRequest, reqAcceptSaga)
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
    const generator = jest.spyOn(acceptRequest, "reqAccept").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      reqAcceptSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [acceptRequestActions.fetchAcceptRequestSuccess(response.data)]
    );
    generator.mockClear();
  })
  it("should dispatch error action", async () => {
    const generator = jest.spyOn(acceptRequest,"reqAccept").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      reqAcceptSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [acceptRequestActions .fetchAcceptRequestError(undefined)]
    );
    generator.mockClear();
  })
})
