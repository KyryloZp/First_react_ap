const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

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
            ]
        };

const messagePageReducer = (state= initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
           return {...state,
               messageList: [...state.messageList, {id: '4', message: action.text, accountId: 'ac_0'}]
           };
        }
        default: return state;
    }
};


export const postMessage = (text) => ({type: ADD_MESSAGE, text});

export default  messagePageReducer;