import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { HashRouter, Navigate, Route, Routes, } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader';
import { useEffect } from 'react';
import ProfileContainer from './components/Profile/ProfileContainer'
import NotFound from './components/common/NotFound';

const UsersContainer = React.lazy(() => import('./components/users/usersContainer'))
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'))

const App = (props) => {
    useEffect(() => {
        props.initializeApp()
    }, [])

    if (!props.initialized) {
        return <Preloader />
    }

    else return (
        <HashRouter >
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div><Preloader /></div>}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/profile/24571" />} />
                            <Route exact path='/messages' element={<MessagesContainer />} />
                            <Route path='/profile/:userId' element={<ProfileContainer />} />
                            <Route path='/profile/' element={<ProfileContainer />} />
                            <Route exact path='/users' element={<UsersContainer />} />
                            <Route exact path='/news' element={<News />} />
                            <Route exact path='/music' element={<Music />} />
                            <Route exact path='settings' element={<Settings />} />
                            <Route exact path='/login' element={<Login />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </HashRouter>
    );
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default connect(mapStateToProps, { initializeApp })(App);
