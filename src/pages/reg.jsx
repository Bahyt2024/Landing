import { useState } from "react";
import InputMask from "react-input-mask";
import "./Register.css";

const req = () => {
    const [form, setForm] = useState({ username: "", phone: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registered User:", form);
    };

    return (
        <div className="register">
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>

                <InputMask
                    mask="+7 (999) 999-99-99"
                    maskChar="_"
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default req;
