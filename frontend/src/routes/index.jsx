import { createBrowserRouter } from "react-router-dom"
import About from "~/pages/About"
import MainLayout from "~/layout/MainLayout"
import AdminLayout from "~/admin/layout/AdminLayout"
import Menu from "~/pages/Menu"
import Home from "~/pages/Home"
import Cart from "~/pages/Cart/Cart"
import Reservation from "~/pages/Reservation"
import Login from "~/pages/Login/Login"
import Dashboard from "~/admin/pages/Dashboard"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'menu/:category',
                element: <Menu />
            },
            {
                path: 'menu/:category/:product',
                element: <Menu />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'book-table',
                element: <Reservation />
            },
            {
                path: 'login',
                element: <Login />
            },
        ]
    },
    {
        path: 'dashboard',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            // {
            //     path: 'products',
            //     element: <Products />
            // },
            // {
            //     path: 'products/add',
            //     element: <ProductAdd />
            // }
        ]
    }
])

export default routes