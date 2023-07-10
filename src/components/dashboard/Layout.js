
import Overview from "./Overview"
import QuickActions from "./QuickActions"
import RecentTrx from "./RecentTrx"


export default function Layout()  {
    return (
        <div className="lg:px-[80px] px-[30px] py-[170px] w-full">
            <Overview/>
            <QuickActions/>
            <RecentTrx/>
        </div>
    )
}