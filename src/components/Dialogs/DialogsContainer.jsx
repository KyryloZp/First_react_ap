import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateMessageActionCreator} from "../../Redux/messagePage-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {connect} from "react-redux";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogList: state.messagePage.dialogList,
        messageList: state.messagePage.messageList,
        newMessage: state.messagePage.newMessage
    }
};

let mapDispatchToProps = (dispatch) => {
  return {
      postMessage: () => {
          dispatch(addMessageActionCreator())
      },
      updateMessage: (text) => {
          dispatch(updateMessageActionCreator(text));

      }
  }
};

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)

