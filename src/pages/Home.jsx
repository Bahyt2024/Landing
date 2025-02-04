import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import noon from "../assets/NonnLanding.mp4";
import ooo from "../assets/a4.jpg";
import Modal from "./Modal";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const reviewsData = [
    "''We have used various repricing software over the past 15 years of selling online and paid a lot higher cost but this piece of software is outstanding! It has greatly improved our efficiency and reduced our expenses, providing real-time data and strategic insights that have allowed us to stay ahead''",
    "''Repricer allows us to work one-on-one with our dedicated account manager to help manage our pricing across our wide range of channels we sell on which is invaluable. The bespoke integration with our inventory management system ensures that we are always on top of pricing fluctuations and can act accordingly''",
    "''The platform’s automated repricing and real-time insights have helped me stay competitive and maximize my profit by adjusting prices dynamically based on market conditions. The ease of use and powerful tools at our disposal have made repricing a seamless process, significantly contributing to our overall sales performance''",
];
const name = [
    "Mr.Pitt",
    "Mr.Sam",
    "Mr.Kilian"
]
const texts = {
    1: "Text1",
    2: "Text2",
    3: "Boost your sales and profits. Instantly",
    4: "Text4",
    5: "Text5"
};
const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [utmContent, setUtmContent] = useState(1);

    // Проверяем и устанавливаем параметр utm_content
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        let utmValue = parseInt(urlParams.get("utp_content"), 10);

        if (!utmValue || utmValue < 1 || utmValue > 5) {
            utmValue = 1; // По умолчанию utm_content=1
            navigate(`?utp_content=${utmValue}`, { replace: true });
        }

        setUtmContent(utmValue);
    }, [location, navigate]);

    const handleModalSubmit = (data) => {
        console.log("Store Details:", data);
        // Здесь можно обработать данные (например, отправить их на сервер)
    };
    const [currentIndex, setCurrentIndex] = useState(0);

    // Функция для переключения на следующий отзыв
    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    };

    // Функция для переключения на предыдущий отзыв
    const prevReview = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
        );
    };
    const [openFaq, setOpenFaq] = useState(9); // По умолчанию открыт последний вопрос

    const toggleFaq = (index) => {
        const newOpenFaq = openFaq === index ? null : index;
        setOpenFaq(newOpenFaq);

        // Если все вопросы закрыты, автоматически открываем последний (9)
        if (newOpenFaq === null) {
            setOpenFaq(9);
        }
    };


    return (
        <div className="main">
            {/* Текст сверху по центру */}
            <div className="home">
                <div className="text-content">
                    <h2>{texts[utmContent]}</h2>
                    <p>Repricing software that is powerful, not overpowering. <br />Built for Professional noon and Carrefour sellers</p>
                    <div className="cta-container">
                        <button className="cta-button" onClick={handleOpenModal}>
                            Try for Free
                        </button>
                        <Modal
                            isOpen={isModalOpen}
                            onClose={handleCloseModal}
                            onSubmit={handleModalSubmit}
                        />
                    </div>
                    <div className="text-content2">
                    <p>No credit card required | Cancel anytime | 3-day trial</p>
                    </div>
                </div>
                <div className="video-content">
                    <video width="100%" height="auto" autoPlay loop muted playsInline>
                        <source src={noon} type="video/mp4" />
                        Ваш браузер не поддерживает видео.
                    </video>
                </div>
            </div>
            <div className="review-slider">
                <button onClick={prevReview} className="arrow left">
                    &#60;
                </button>
                <div className="review-container">
                    <p className="review">{reviewsData[currentIndex]}</p>
                    <div className="review-rate">
                        <p className="name">{name[currentIndex]}</p>
                        <div className="rating">
                            {/* Рисуем 5 звезд с помощью CSS */}
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                        </div>
                    </div>
                </div>
                <button onClick={nextReview} className="arrow right">
                    &#62;
                </button>
            </div>
            <div className="faq-container">
                <div className="faq-row">
                    <div className="faq-item">
                        <h3>Win more BuyBoxes with SaleScout</h3>
                        <p>SaleScout customers increase their sales in CarreFour.</p>
                    </div>
                    <div className="faq-item2">
                        <h3>Set it and forget it</h3>
                        <p>Our services help sellers on the Carrefour marketplace stay ahead of the competition, allowing them to focus on growing their business.</p>
                    </div>
                    <div className="faq-item2">
                        <h3>Raise the Buy Box price</h3>
                        <p>We help sellers increase sales by optimizing prices and analyzing competitor data to achieve maximum profit.</p>
                    </div>
                    <div className="faq-item2">
                        <h3>Battle tested</h3>
                        <p>With over 15 years of experience, we’ve considered all possible scenarios and integrated them into the most effective algorithms for Carrefour marketplace sellers.</p>
                        <div className="cta-container">
                            <button className="cta-button" onClick={handleOpenModal}>
                                Try for Free
                            </button>

                        </div>
                    </div>
                </div>
                <div className="faq-bottom">
                    <div className="video-content2">
                        <img src={ooo} alt="Image description" width="100%" height="auto"/>
                    </div>
                </div>
            </div>

            {/* Новая секция с вопросами */}
            <div className="faq-expanded">

                <div className="faq-item-expended">
                    <h4>FAQs</h4>
                    <div className="faq-header" onClick={() => toggleFaq(0)}>
                        <p>How does SaleScout work?</p>
                        <span className="faq-toggle">{openFaq === 0 ? '-' : '+'}</span>
                    </div>
                    <div className={`faq-content ${openFaq === 0 ? 'open' : ''}`}>
                        <p>SaleScout uses intelligent price automation to ensure your products remain at the top among
                            sellers on Noon. The system analyzes competitor data and automatically adjusts your prices
                            to maximize sales and profits.</p>
                    </div>
                </div>

                <div className="faq-item-expended">
                    <div className="faq-header" onClick={() => toggleFaq(1)}>
                        <p>Why does my company need SaleScout?</p>
                        <span className="faq-toggle">{openFaq === 1 ? '-' : '+'}</span>
                    </div>
                    <div className={`faq-content ${openFaq === 1 ? 'open' : ''}`}>
                        <p>Over 80% of sales on Noon go to sellers who rank at the top. SaleScout guarantees that your
                            store stays ahead, giving you a competitive edge and increasing your revenue.</p>
                    </div>
                </div>

                <div className="faq-item-expended">
                    <div className="faq-header" onClick={() => toggleFaq(2)}>
                        <p>Will anyone have access to my data?</p>
                        <span className="faq-toggle">{openFaq === 2 ? '-' : '+'}</span>
                    </div>
                    <div className={`faq-content ${openFaq === 2 ? 'open' : ''}`}>
                        <p>We understand your concerns about security and privacy. That’s why all your data is encrypted
                            and never shared with third parties. You also have full control and can revoke access to
                            your store at any time through your Noon seller account.</p>
                    </div>
                </div>

                <div className="faq-item-expended">
                    <div className="faq-header" onClick={() => toggleFaq(3)}>
                        <p>Can I test the system before purchasing?</p>
                        <span className="faq-toggle">{openFaq === 3 ? '-' : '+'}</span>
                    </div>
                    <div className={`faq-content ${openFaq === 3 ? 'open' : ''}`}>
                        <p>Yes, we offer a 3-day free trial. You’ll be able to see how SaleScout performs in real
                            conditions and experience the benefits of our system firsthand.</p>
                    </div>
                </div>

                <div className="faq-item-expended">
                    <div className="faq-header" onClick={() => toggleFaq(4)}>
                        <p>Can I manage the system myself?</p>
                        <span className="faq-toggle">{openFaq === 4 ? '-' : '+'}</span>
                    </div>
                    <div className={`faq-content ${openFaq === 4 ? 'open' : ''}`}>
                        <p>Absolutely! SaleScout has a simple and intuitive interface, allowing you to control pricing
                            settings, choose strategies, and access sales analytics with ease.</p>
                    </div>
                </div>

                <div className="faq-item-expended">
                    <div className="faq-header" onClick={() => toggleFaq(5)}>
                        <p>How quickly will I see results?</p>
                        <span className="faq-toggle">{openFaq === 5 ? '-' : '+'}</span>
                    </div>
                    <div className={`faq-content ${openFaq === 5 ? 'open' : ''}`}>
                        <p>SaleScout delivers results within hours—your store moves up the rankings, and order flow
                            increases almost immediately.</p>
                    </div>
                </div>

                <div className="faq-item-expended">
                    <div className="faq-header" onClick={() => toggleFaq(6)}>
                        <p>What if I have questions?</p>
                        <span className="faq-toggle">{openFaq === 6 ? '-' : '+'}</span>
                    </div>
                    <div className={`faq-content ${openFaq === 6 ? 'open' : ''}`}>
                        <p>Our support team is always available. You can reach us via WhatsApp or use the help section
                            in the system.</p>
                    </div>
                </div>

                <div className="faq-item-expended">
                    <div className="faq-header" onClick={() => toggleFaq(7)}>
                        <p>What happens after the trial period ends?</p>
                        <span className="faq-toggle">{openFaq === 7 ? '-' : '+'}</span>
                    </div>
                    <div className={`faq-content ${openFaq === 7 ? 'open' : ''}`}>
                        <p>You can choose a suitable plan and continue using SaleScout. If you decide not to continue,
                            all settings and changes remain yours. You’ll only be billed if you choose to keep boosting
                            your sales.</p>
                    </div>
                </div>

                <div className="faq-item-expended">
                    <div className="faq-header" onClick={() => toggleFaq(8)}>
                        <p>How is SaleScout better than other pricing systems?</p>
                        <span className="faq-toggle">{openFaq === 8 ? '-' : '+'}</span>
                    </div>
                    <div className={`faq-content ${openFaq === 8 ? 'open' : ''}`}>
                        <p>SaleScout updates prices in real-time, making it faster than other solutions and keeping you
                            ahead of the competition. Our smart algorithms don’t just lower prices to secure top
                            rankings—they also strategically increase them to maximize your profits when competitors
                            allow.</p>
                    </div>
                </div>
                <div className="faq-item-expended">
                    <div className="faq-header" onClick={() => toggleFaq(9)}>
                        <p></p>
                        <span className="faq-toggle">{openFaq === 9 ? '' : ''}</span>
                    </div>
                    <div className={`faq-content ${openFaq === 9 ? 'open' : ''}`}>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
