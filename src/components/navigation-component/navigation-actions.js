import * as types from './navigation-action-types';

export function toggleVisible (navigationElement) {
  return {
    type: types.TOGGLE_VISIBLE,
    payload: navigationElement
  }
}

export function toggleEnable (navigationElement) {
  return {
    type: types.TOGGLE_ENABLE,
    payload: navigationElement
  }
}