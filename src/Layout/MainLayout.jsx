import Header from "../components/Header";
import Footer from "../components/Footer";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
    return (
        <div className="layout">

            <Header />
            <main className="main-content">{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
