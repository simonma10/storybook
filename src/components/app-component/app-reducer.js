import _ from 'lodash';
import * as types from './app-action-types';

const initialState = {
    status:'init',
    jsonData:{},
    bookData:{},
    settings:{
        sfx: true,
        speech: true,
        music: true,
        fullscreen: false
    },
    currentPage: 0,
    lastPage: 0
};

export default function appReducer(state = initialState, action){

    switch (action.type){

        case types.REQUEST_BOOK_DATA:
            return Object.assign({}, state, {
                status:'loading'
            })

        case types.RECEIVE_BOOK_DATA:
            let data = action.payload;

            return Object.assign({}, state, {
                jsonData: data,
                bookData: data.pages ? data.pages : 'error',
                lastPage: data.pages.length || 0
            })

        case types.SET_APP_STATUS:
            return Object.assign({}, state, {
                status:action.payload
            })

        case types.UPDATE_SETTING:
            let setting = action.payload;
            let clonedSettings = _.clone(state.settings);
            switch (setting.name){
                case 'sfx':
                    clonedSettings.sfx = setting.value;
                    break;
                case 'speech':
                    clonedSettings.speech = setting.value;
                    break;
                case 'music':
                    clonedSettings.music = setting.value;
                    break;
                case 'fullscreen':
                    clonedSettings.fullscreen = setting.value;
                    break;
                default:
                    break;
            }
            return Object.assign({}, state, {
                settings:clonedSettings
            })

        case types.UPDATE_PAGE:
            if (action.payload < 0 || action.payload > state.lastPage){
                return state;
            }
            return Object.assign({}, state, {
                currentPage: action.payload
            })

        default:
            return state;
    }
}