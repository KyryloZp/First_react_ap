const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


let store = {
    _state: {
        messagePage: {
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
        },
        profilePage: {
            postList: [
                {id: '1', message: 'Hi, bro!'},
                {id: '2', message: 'Hi, are you doing ?'},
                {id: '3', message: "Five ocklock"}
            ],
            newPostText: ''
        },
        mainPage: {
            navbar: [
                {id: "1", accountName: 'Viva'},
                {id: '2', accountName: 'lobzik'}
            ]
        }
    },
    getState () {
      return this._state;
    },
    _addMessage() {
        this._state.messagePage.messageList.push(
            {id: '4', message: this._state.messagePage.newMessage, accountId: 'ac_0'});
        this._state.messagePage.newMessage = '';
        this._callSubscriber();

    },
    _updateMessageText(newMessageText) {
        this._state.messagePage.newMessage = newMessageText;
        this._callSubscriber();
    },
    _addPost () {
        this._state.profilePage.postList.push({id: '1', message: this._state.profilePage.newPostText});
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    _updatePostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    _callSubscriber () {},
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {
        switch (action.type) {
            case ADD_POST: this._addPost();
            return;
            case UPDATE_POST_TEXT : this._updatePostText(action.post);
            return;
            case ADD_MESSAGE: this._addMessage();
            return;
            case UPDATE_MESSAGE_TEXT: this._updateMessageText(action.message);
            return;
        }
    }
};

export const addPostActionCreactor = () => ({type: ADD_POST});
export const updatePostActionCreator = (text) => ({type: UPDATE_POST_TEXT, post: text});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, message: text});


export default store;
