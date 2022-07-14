import s from './Post.module.css'
const Posttest = (props) => {
    
    return (
    <div className={s.post}>
        <img src='https://i04.appmifile.com/730_bbs_en/15/10/2021/6c25b1cc748cf7be86183054aa711c46.jpg' alt="rage" />
        {props.message}
        <div>like: {props.likesCount}</div>

    </div>
    )
}

export default Posttest;