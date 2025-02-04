import React, { useEffect } from "react";
import InputMask from "react-input-mask";
import './Modal.css';

const texts = {
    1: "Text1",
    2: "Text2",
    3: "Boost your sales and profits. Instantly",
    4: "Text4",
    5: "Text5"
};
const Modal = ({ isOpen, onClose, onSubmit }) => {
    const [storeName, setStoreName] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [utp, setUtp] = React.useState(""); // Добавлено поле для УТП
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    // Извлекаем utm_content из URL при монтировании компонента
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const utmContent = urlParams.get("utp_content"); // Получаем значение utm_content
        if (utmContent) {
            setUtp(utmContent); // Устанавливаем значение в состояние utp
        }
    }, []);

    const handleSubmit = async () => {
        try {
            // Отправляем данные на сервер
            const response = await fetch('http://localhost:3000/send-promotion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    storeName,
                    phoneNumber,
                    Utp: texts[utp], // Отправляем УТП
                }),
            });

            if (response.ok) {
                setIsSubmitted(true); // Если отправка успешна
            } else {
                alert("Ошибка при отправке данных.");
            }
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
            alert("Ошибка при отправке данных.");
        }
    };

    const handleCloseConfirmation = () => {
        setIsSubmitted(false); // Сброс состояния отправки
        setStoreName(""); // Очистка формы
        setPhoneNumber(""); // Очистка формы
        setUtp(""); // Очистка поля УТП
        onClose(); // Закрытие модалки
    };

    // Проверка, если все поля заполнены
    const isFormValid = storeName !== "" && phoneNumber !== "" && utp !== "";

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {isSubmitted ? (
                    <div className="confirmation-message">
                        <h4>Thank you</h4>
                        <h5>Our manager will contact you in 15 minutes.</h5>
                        <button className="cta-button" onClick={handleCloseConfirmation}>
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="form-group">
                            <label>WhatsApp Phone Number</label>
                            <InputMask
                                mask="+7 (999) 999-9999"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="Enter phone number"
                            />
                        </div>
                        <div className="form-group">
                            <label>Store Name</label>
                            <input
                                type="text"
                                value={storeName}
                                onChange={(e) => setStoreName(e.target.value)}
                                placeholder="Enter store name"
                            />
                        </div>


                        <div className="modal-actions">
                            <button
                                className="cta-button"
                                onClick={handleSubmit}
                                disabled={!isFormValid} // Отключить кнопку, если форма не валидна
                            >
                                Submit
                            </button>
                            <button className="cta-button cancel" onClick={onClose}>
                                Cancel
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Modal;
