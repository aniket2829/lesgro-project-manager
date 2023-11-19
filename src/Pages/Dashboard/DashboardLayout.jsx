import { GiHamburgerMenu } from "react-icons/gi";
import { RiAccountCircleFill } from "react-icons/ri";
import { useZustandStore } from "../../store/store";
import { Outlet } from "react-router-dom";



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
        <div className="flex justify-between items-center p-6 shadow-sm border">
            <div className="flex items-center text-xl">
                <GiHamburgerMenu onClick={() => toggleSidebar()} />
                <h1 className="ps-4">Dashboard</h1>
            </div>
            <div>
                <RiAccountCircleFill className="text-2xl" />
            </div>
        </div>
    )
}

// Sidebar Wrapper Component
function SidebarWrapper({ children }) {
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

    return (
        <div className={`w-[250px] shadow-lg h-[100vh] transition-all ${!sidebarOpen ? 'ms-[-250px]' : ''}`}>
            {pageLinks.map(item => <SidebarItem key={item.title} title={item.title} link={item.link} />)}
        </div>
    )
}

function SidebarItem({ title, link }) {
    return (
        <div className="p-6 border">
            {title}
        </div>
    )
}