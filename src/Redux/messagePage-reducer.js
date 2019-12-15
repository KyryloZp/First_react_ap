const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
            dialogList: [
                {id: '1', name: 'Valera'},
                {id: '2', name: 'alcash'},
                {id: '3', name: 'sanya'}
            ],
            messageList: [
                {id: '1', message: 'Hi, i am victor!', accountId: 'ac_0'},
                {id: '2', message: 'aksdjaklsdj', accountId: 'ac_1'},
                {id: '3', message: 'Hi, bro!', accountId: 'ac_0'}
            ],
            newMessage: ''
        };

const messagePageReducer = (state= initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
           return {...state,
               messageList: [...state.messageList, {id: '4', message: state.newMessage, accountId: 'ac_0'}],
               newMessage: state.newMessage
           };
        }
        case UPDATE_MESSAGE_TEXT: {
            return {
                ...state, newMessage: action.message
            };
        }
        default: return state;
    }
};


export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, message: text});

export default  messagePageReducer;