
import Overview from "./Overview"
import QuickActions from "./QuickActions"
import RecentTrx from "./RecentTrx"


export default function Layout()  {
    return (
        <div className="px-20 py-5">
            <Overview/>
            <QuickActions/>
            <RecentTrx/>
        </div>
    )
}