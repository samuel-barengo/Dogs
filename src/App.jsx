import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Login from './component/Login/Login';
import { UserStorage } from './UserContext';
import User from './component/User/User';
import ProtectedRoute from './component/Helper/ProtectedRoute';
import Photo from './component/Photo/Photo';
import UserProfile from './component/User/UserProfile';
import NotFound from './component/NotFound';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter> {/*basename="/Dogs"*/}
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