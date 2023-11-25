import { GiHamburgerMenu } from "react-icons/gi";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { useZustandStore } from "@/store/store";
import { Outlet } from "react-router-dom";
import defaultuser from "@/assets/defaultuser.png"



// Layout Component
export default function DashboardLayout() {
    return (
        <>
            <Navbar />
            <SidebarWrapper>
                <Outlet />
            </SidebarWrapper>
        </>
    )
}


// Navbar Component
function Navbar() {
    const toggleSidebar = useZustandStore((state) => state.toggleSidebar)

    return (
        <div className="flex justify-between items-center px-6 py-4 shadow-sm border">
            <div className="flex items-center text-xl cursor-pointer">
                <div className="hover:bg-slate-200 active:bg-slate-100 p-2 rounded-lg" onClick={() => toggleSidebar()}>
                    <GiHamburgerMenu />
                </div>
                <h1 className="ps-4">Dashboard</h1>
            </div>
            <div>
                <RiAccountCircleFill className="text-2xl" />
            </div>
        </div>
    )
}

// Sidebar Wrapper Component
function SidebarWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="p-4">
                    {children || <h1>No Content</h1>}
                </div>
            </div>
        </>
    )
}

// Sidebar Component
const pageLinks = [
    {
        title: "Project",
        link: "#"
    },
    {
        title: "Tasks",
        link: "#"
    },
    {
        title: "Users",
        link: "#"
    }
]


function Sidebar() {
    const sidebarOpen = useZustandStore(state => state.sidebarOpen)
    const toggleSidebar = useZustandStore(state => state.toggleSidebar)

    return (
        <div className={`w-[250px] shadow-lg h-[100vh] transition-all ${!sidebarOpen ? 'ms-[-250px]' : ''}`}>
            <div className="p-8 flex justify-center relative">
                <span onClick={() => toggleSidebar()} className="hover:bg-slate-200 active:bg-slate-100 p-1 rounded absolute right-4 top-4"><RiCloseFill /></span>
                <img src={defaultuser} className="rounded-full" alt="" />
            </div>
            {pageLinks.map(item => <SidebarItem key={item.title} title={item.title} link={item.link} />)}
        </div>
    )
}

function SidebarItem(props: { title: string, link: string }) {
    return (
        <div className="px-6 py-4 border cursor-pointer">
            {props.title}
        </div>
    )
}