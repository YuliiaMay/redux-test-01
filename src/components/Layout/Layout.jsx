import Nav from "components/Nav/Nav";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header><Nav/></header>
            <main>
                <Outlet/>
            </main>
        </>
    )
};

export default Layout;