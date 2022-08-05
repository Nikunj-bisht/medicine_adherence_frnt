import adherences from "../../src/redux/apis/adherence"

describe("test fetchimage",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(adherences.medimages(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})

describe("test downloadpdf",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(adherences.downloadPdf(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})
describe("test syncmed",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(adherences.syncmeds(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})
describe("test getmedhistory",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(adherences.getmedhistory(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})
describe("test syncmedhistory",()=>{
    it("test images",()=>{
        const payload="payload"
        expect(adherences.syncmedicineHistory(payload)).toEqual({"_U": 0, "_V": 0, "_W": null, "_X": null})
    })
})
