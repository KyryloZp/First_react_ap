import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateMessageActionCreator} from "../../Redux/messagePage-reducer";
import {connect} from "react-redux";


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

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;
