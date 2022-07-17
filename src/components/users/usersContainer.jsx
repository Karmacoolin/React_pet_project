import { connect } from "react-redux";
import { follow, unfollow, getUsers, setCurrentPage } from "../../redux/users-reducer";
import React from 'react';
import Users from "./users";
import Preloader from "../common/preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getTotalUsersCount, getUsersPage, getUsersPageSize } from "../../redux/user-selectors";
import { useEffect } from "react";

const UsersContainer = (props) => {
    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize);
    }, []);

   const onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.getUsers(pageNumber, props.pageSize);
    }

    return <>
        {props.isFetching ? <Preloader /> : null}
        <Users
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChanged={onPageChanged}
            users={props.users}
            follow={props.follow}
            unfollow={props.unfollow}
            toggleFollowingProgress={props.toggleFollowingProgress}
            followingInProgress={props.followingInProgress}
            portionSize={props.portionSize} />
    </>
}

let mapStateToProps = (state) => {
    return {
        users: getUsersPage(state),
        pageSize: getUsersPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: state.usersPage.portionSize
    }
}

export default compose(connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, getUsers
}))(UsersContainer);



