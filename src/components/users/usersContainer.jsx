import { connect } from "react-redux";
import { follow,  unfollow, getUsers, setCurrentPage } from "../../redux/users-reducer";
import React from 'react';
import Users from "./users";
import Preloader from "../common/preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getTotalUsersCount, getUsersPage, getUsersPageSize } from "../../redux/user-selectors";




class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);

        
    }



    render() {


        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
                

            />
        </>

    }
}




let mapStateToProps = (state) => {
    return {
        users: getUsersPage(state),
        pageSize: getUsersPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }

}



export default compose(connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, getUsers
}),withAuthRedirect )(UsersContainer);



