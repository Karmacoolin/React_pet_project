import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/users/usersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader';
import { Component } from 'react';

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
           return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer />
                    <Navbar />
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route exact path='/messages' element={<MessagesContainer />} />
                            <Route path='/profile/:userId' element={<ProfileContainer />} />
                            <Route path='/profile/' element={<ProfileContainer />} />
                            <Route exact path='/users' element={<UsersContainer />} />
                            <Route exact path='/news' element={<News />} />
                            <Route exact path='/music' element={<Music />} />
                            <Route exact path='settings' element={<Settings />} />
                            <Route exact path='/login' element={<Login />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default connect(mapStateToProps, { initializeApp })(App);
