import Profile from "./Profile";
import React from 'react';
import { connect } from "react-redux";
import { userProfileThunk, getStatus, updateStatus, savePhoto, saveProfile } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {

            userId = this.props.authUserId;
        }

        this.props.userProfileThunk(userId);
        this.props.getStatus(userId);



    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId != prevProps.router.params.userId) {
            let userId = this.props.router.params.userId;
            if (!userId) {

                userId = this.props.authUserId;
            }
            this.props.userProfileThunk(userId);
            this.props.getStatus(userId);
        }
    }

    render() {
        debugger
        return (
            <Profile profile={this.props.profile}
                status={this.props.status} updateStatus={this.props.updateStatus}
                isOwner={!this.props.router.params.userId} savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile} />
        )

    }
}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}




export default compose(
    connect(mapStateToProps, {
        userProfileThunk, getStatus, updateStatus, savePhoto,
        saveProfile
    }), withRouter)(ProfileContainer);