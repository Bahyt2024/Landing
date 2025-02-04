import './RegisterLayout.css'
import Header from "../components/Header";
import Footer from "../components/Footer";

const RegisterLayout = ({ children }) => {
    return (
        <div className="register-layout">
            <Footer/>
            <main className="Req-content">{children}</main>
            <Header/>


        </div>
    );
};

export default RegisterLayout;
