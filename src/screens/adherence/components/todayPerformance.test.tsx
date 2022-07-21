import {shallow} from "enzyme"
import TodayPerformance from "./todayPerformance"

describe("today's performance",()=>{
    it("should render without error",()=>{
        let wrapper = shallow(<TodayPerformance />)
        expect(wrapper).toMatchSnapshot()
    })
})