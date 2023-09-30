import {Outlet} from "react-router-dom";
import HeaderLayout from "@layout/Header/Header.tsx";


const Layout = () => {
    return (
        <div className="App">
            <HeaderLayout/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;