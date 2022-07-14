import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusHooks from "./ProfileStatusHooks";
const ProfileInfo = (props) => {
    return (
        <div>
    
      <div className={s.avatar}>
        <img src= {props.profile.photos.large} />
        <ProfileStatusHooks status=  {props.status} updateStatus = {props.updateStatus} />
      </div>
      
      
      
      </div>
      
    )
}

export default ProfileInfo;