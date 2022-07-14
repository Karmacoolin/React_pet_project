import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessActionCreator } from '../../redux/messages-reducer';
import Messages from './Messages';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        
        addMess: (newMessText) => { dispatch(addMessActionCreator(newMessText)); }

    }
}


export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)