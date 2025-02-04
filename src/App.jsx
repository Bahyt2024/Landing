import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import RegisterLatout from "./layout/RegisterLatout";
import Home from "./pages/Home";
import Register from "./pages/reg";
import "./styles.css";

function App() {
    return (
        <Router>
            <Routes>
                {/* Главная страница с использованием MainLayout */}
                <Route path="/" element={<MainLayout><Home /></MainLayout>} />

                {/* Страница регистрации с использованием RegisterLayout */}
                <Route path="/register" element={<RegisterLatout><Register /></RegisterLatout>} />
            </Routes>
        </Router>
    );
}

export default App;
