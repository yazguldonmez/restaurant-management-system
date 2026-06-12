import { Outlet } from "react-router-dom";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import heroBg from '~/assets/images/hero-bg.jpg'

export default function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}