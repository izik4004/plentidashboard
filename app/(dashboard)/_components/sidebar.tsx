import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"

export const Sidebar = () => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto bg-[#fffdfd] shadow-sm">
            <div className="flex justify-items-center border-b h-20 p-4">
                <Logo/>
            </div>
            <div className="flex flex-col w-full bg-white">
                <SidebarRoutes/>
            </div>
            <div className="mt-auto py-10 px-6 flex-col flex-end">
                <p>Business tag</p>
                <h3>Shoprite Ikeja</h3>
            </div>
        </div>
    )
}