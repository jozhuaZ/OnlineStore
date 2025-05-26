import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Landing Page/LandingPage";
import LoginPage from "./LoginPage/LoginPage";

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/LoginPage/LoginPage' element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};