import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Landing Page/LandingPage";
import LoginPage from "./LoginPage/LoginPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import StorePage from './StorePage/StorePage';

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/LoginPage/LoginPage' element={<LoginPage />} />
                <Route path='/SignUpPage/SignUpPage' element={<SignUpPage />} />
                <Route path='/StorePage/StorePage' element={<StorePage />} />
            </Routes>
        </BrowserRouter>
    );
};