import React from "react";
import s from './user.module.css';
import userPhoto from '../../assets/img/rickyie.jpg';
import { NavLink } from "react-router-dom";
import Paginator from "./Paginator";



let Users = (props) => {

    return <div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
            totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} portionSize={props.portionSize} />

        {
            props.users.map(u => <div className={s.item}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => { props.unfollow(u.id); }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => { props.follow(u.id); }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        {/* <div>{u.location.country}</div> */}
                        {/* <div>{u.location.city}</div> */}
                    </span>
                </span>

            </div>
            )
        }
    </div>

};

export default Users;