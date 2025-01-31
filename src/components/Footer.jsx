import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="company-name">
                    <p>@ SaleScout 2025</p>
                </div>
                <div className="footer-links">
                    <a href="/about">Contact Us</a>
                    <a href="/services">User Agreement</a>
                    <a href="/contact">Offer for provision of services</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
