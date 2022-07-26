import { takeLatest } from "@redux-saga/core/effects"
import { runSaga } from "redux-saga";
import { getPdfActions } from "../../../src/redux/actions/adherence/getPdfActions";
import { downloadPdfSaga, downloadPdfwatcherSaga } from "../../../src/redux/sagas/adherence/getPdfSaga";
import downloadPdf from "../../../src/redux/apis/getPdfRequest";

const initialData = {}
describe("test downloadPdfwatcherSaga", () => {
  const result = downloadPdfwatcherSaga()
  it("test login loading", () => {
    expect(result.next().value).toEqual(
      takeLatest(getPdfActions.getPdfRequest, downloadPdfSaga)
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
    const generator = jest.spyOn(downloadPdf , "downloadPdf").mockImplementation(() => Promise.resolve(response));
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      downloadPdfSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [getPdfActions.getPdfSuccess(response.data)]
    );
    generator.mockClear();
  })
  it("should dispatch error action", async () => {
    const generator = jest.spyOn(downloadPdf , "downloadPdf").mockImplementation(() => Promise.reject());
    const dispatched = []
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      downloadPdfSaga,
      initialData
    );
    expect(result).toBeTruthy();
    expect(generator).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual(
      [getPdfActions.getPdfFailure(undefined)]
    );
    generator.mockClear();
  })
})