import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import noon from "../assets/NonnLanding.mp4";
import ooo from "../assets/ooo.mp4";



const reviewsData = [
    "We have used various repricing software over the past 15 years of selling online and paid a lot higher cost but this piece of software is outstanding!”",
    "Repricer allows us to work one-on-one with our dedicated account manager to help manage our pricing across our wide range of channels we sell on which is invaluable. The bespoke integration with our inventory management system is also hugely important.",
    "The platform’s automated repricing and real-time insights have helped me stay competitive and maximize my profit",
];
const name = [
    "Mr.Pitt",
    "Mr.Pitt",
    "Mr.Pitt"
]
const Home = () => {
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
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        // Если нажали на тот же вопрос, то скрываем его, иначе показываем новый
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="main">
            {/* Текст сверху по центру */}


            <div className="home">
                <div className="text-content">
                    <h2>Boost your sales with SaleScout</h2>
                    <p>Increase your sales with our automated pricing system.</p>
                    <div className="cta-container">
                        <Link to="/register" className="cta-button">Try free</Link>
                    </div>
                </div>


                <div className="video-content">
                    <video width="100%" height="auto" controls>
                        <source src={noon} type="video/mp4"/>
                        Ваш браузер не поддерживает видео.
                    </video>
                </div>
            </div>
            <div className="review-slider">
                <button onClick={prevReview} className="arrow left">
                    &#60;
                </button>
                <div className="review-container">
                    <div className="rating">
                        {/* Рисуем 5 звезд с помощью CSS */}
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star"></span>
                    </div>
                    <p className="review">{reviewsData[currentIndex]}</p>
                    <p className="name">{name[currentIndex]}</p>
                </div>
                <button onClick={nextReview} className="arrow right">
                    &#62;
                </button>
            </div>
            <div className="faq-container">
                <div className="faq-row">
                    <div className="faq-item">
                        <h3>What is SaleScout?</h3>
                        <p>SaleScout is an automated pricing system that helps you increase your sales by adjusting
                            prices in real-time.</p>
                    </div>
                    <div className="faq-item">
                        <h3>How does it work?</h3>
                        <p>SaleScout monitors the market and adjusts your prices to stay competitive, ensuring you get
                            the best possible sales results.</p>
                    </div>
                </div>
                <div className="faq-bottom">
                    <div className="faq-item">
                        <h3>Why choose SaleScout?</h3>
                        <p>SaleScout provides an easy-to-use platform that saves you time and boosts your revenue by
                            optimizing your pricing strategy.</p>
                        <div className="cta-container">
                            <Link to="/register" className="cta-button">Try free</Link>
                        </div>
                    </div>
                    <div className="video-content2">
                        <video width="100%" height="auto" controls>
                            <source src={ooo} type="video/mp4"/>
                            Ваш браузер не поддерживает видео.
                        </video>
                    </div>
                </div>
            </div>

            {/* Новая секция с вопросами */}
            <div className="faq-expanded">
                <div className="faq-item-expended">
                    <div className="faq-header" onClick={() => toggleFaq(0)}>
                        <h3>What are the benefits of using SaleScout?</h3>
                        <span className="faq-toggle">{openFaq === 0 ? '-' : '+'}</span>
                    </div>
                    <div className={`faq-content ${openFaq === 0 ? 'open' : ''}`}>
                        <p>SaleScout helps you maximize your profits by adjusting your pricing dynamically based on
                            real-time market data.</p>
                    </div>
                </div>

                <div className="faq-item-expended">
                    <div className="faq-header" onClick={() => toggleFaq(1)}>
                        <h3>How can I get started with SaleScout?</h3>
                        <span className="faq-toggle">{openFaq === 1 ? '-' : '+'}</span>
                    </div>
                    <div className={`faq-content ${openFaq === 1 ? 'open' : ''}`}>
                        <p>Getting started with SaleScout is easy. Simply sign up, set your pricing strategy, and let
                            SaleScout optimize your prices.</p>
                    </div>
                </div>

                <div className="faq-item-expended">
                    <div className="faq-header" onClick={() => toggleFaq(2)}>
                        <h3>Is there a free trial available?</h3>
                        <span className="faq-toggle">{openFaq === 2 ? '-' : '+'}</span>
                    </div>
                    <div className={`faq-content ${openFaq === 2 ? 'open' : ''}`}>
                        <p>Yes, SaleScout offers a 14-day free trial to help you get started and experience the benefits
                            of our platform.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
