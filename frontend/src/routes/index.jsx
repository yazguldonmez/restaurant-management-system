import { createBrowserRouter } from "react-router-dom";
import About from "~/pages/About";
import MainLayout from "~/layout/MainLayout";
import Menu from "~/pages/Menu";
import Home from "~/pages/Home";
import Cart from "~/pages/Cart/Cart";
import BookTable from "~/components/Reservation";

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
                element: <BookTable />
            },
        ]
    }
])

export default routes