import * as types from './app-action-types';

export function requestBookData () {
    return {
        type: types.REQUEST_BOOK_DATA,
        payload: 'loading'
    }
}

export function receiveBookData(payload){
    return {
        type: types.RECEIVE_BOOK_DATA,
        payload: payload
    }
}

export function setAppStatus(payload){
    return {
        type: types.SET_APP_STATUS,
        payload: payload
    }
}

export function updateSetting(payload){
    return {
        type: types.UPDATE_SETTING,
        payload: payload
    }
}

export function updatePage(payload){
    return {
        type: types.UPDATE_PAGE,
        payload: payload
    }
}