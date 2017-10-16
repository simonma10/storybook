
import * as types from './navigation-action-types';

const initialState = {
  home:{
    visible: true,
    enabled: false,
  },
  back: {
    visible: false,
    enabled: false,
  },
  forward: {
    visible: false,
    enabled: false,
  }
};

export default function navigationReducer(state = initialState, action){

  switch (action.type){
    case types.TOGGLE_ENABLE:
      switch(action.payload){

        case 'home':
          return Object.assign({}, state, {
            home: {
              enabled: !state.home.enabled
            }
          })

        case 'back':
          return Object.assign({}, state, {
            back: {
              enabled: !state.back.enabled
            }
          })

        case 'forward':
          return Object.assign({}, state, {
            forward: {
              enabled: !state.forward.enabled
            }
          })

        default:
          return state;
      }

    case types.TOGGLE_VISIBLE:
      switch(action.payload){

        case 'home':
          return Object.assign({}, state, {
            home: {
              visible: !state.home.visible
            }
          })

        case 'back':
          return Object.assign({}, state, {
            back: {
              visible: !state.back.visible
            }
          })

        case 'forward':
          return Object.assign({}, state, {
            forward: {
              visible: !state.forward.visible
            }
          })

        default:
          return state;
      }

    default:
      return state;

  }

}