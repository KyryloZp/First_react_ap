import messagePageReducer from "./messagePage-reducer";
import profilePageReducer from "./profilePage-reducer";
import usersPageReducer from "./usersPage-reducer";



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
        },
        usersPage: {
            usersList: [
                {id: 1, followed: false, fullName: 'Valera', status: 'i am a king', location: {city: 'Kyiv', country: 'Ukraine'}}
            ]
        }
    },
    getState () {
      return this._state;
    },
    _callSubscriber () {},
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {
        this._state.messagePage = messagePageReducer(this._state.messagePage, action);
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.usersPage = usersPageReducer(this._state.usersPage, action);

        this._callSubscriber(this._state);

        }
};

window.store = store;





export default store;
