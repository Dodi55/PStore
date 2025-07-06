import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ModalCatalog } from "../../components/ModalCatalog/ModalCatalog";

export const Layout = () => {
    return (
        <div>
            <Header />
            <ModalCatalog />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
};