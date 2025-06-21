import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import StorePage from './pages/StorePage';

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/pages/LoginPage' element={<LoginPage />} />
                <Route path='/pages/SignUpPage' element={<SignUpPage />} />
                <Route path='/pages/StorePage' element={<StorePage />} />
            </Routes>
        </BrowserRouter>
    );
};