import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
// import Footer from "~/admin/components/Footer";
import Header from "~/admin/components/Header";
import Sidebar from "~/admin/components/Sidebar";

export default function AdminLayout() {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [sidebarOpenState, setSidebarOpenState] = useState(false)

    const sidebarStateUpdate = (newData) => {
        setSidebarOpen(newData);
    }
    // const updateSidebarOpen = (newData) => {
    //     setSidebarOpen(newData);
    // }
    console.log(sidebarOpen)

    useEffect(() => {
        if (sidebarOpen) {
            document.body.classList.remove("sidebar-mini");
            document.body.classList.add("sidebar-collapse");
        } else {
            document.body.classList.remove("sidebar-collapse");
            document.body.classList.add("sidebar-mini");
        }
    }, [sidebarOpen])


    return (
        <>

            <Header sidebarStateUpdate={sidebarStateUpdate} sidebarOpen={sidebarOpen} />
            <Sidebar sidebarOpen={sidebarOpen} />
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}