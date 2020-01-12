import React from 'react';
import Dialogs from "./Dialogs";
import {postMessage} from "../../Redux/messagePage-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {connect} from "react-redux";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogList: state.messagePage.dialogList,
        messageList: state.messagePage.messageList
    }
};

let mapDispatchToProps = (dispatch) => {
  return {
      postMessage: (text) => {
          dispatch(postMessage(text))
      }
  }
};

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)

