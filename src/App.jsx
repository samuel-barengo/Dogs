import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Component/Header';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Login from './Component/Login/Login';
import { UserStorage } from './UserContext';
import User from './Component/User/user';
import ProtectedRoute from './Component/Helper/ProtectedRoute';
import Photo from './Component/Photo/Photo';
import UserProfile from './Component/User/UserProfile';
import NotFound from './Component/NotFound';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter basename="/Dogs">
                <UserStorage>
                    <Header />
                    <main className='AppBody'>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='login/*' element={<Login />} />
                            <Route path='conta/*' element={<ProtectedRoute><User /></ProtectedRoute>} />
                            <Route path='foto/:id' element={<Photo />} />
                            <Route path='perfil/:user' element={<UserProfile />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </main>
                    <Footer />
                </UserStorage>
            </BrowserRouter>
        </div>
    );
};

export default App;