import * as types from './page-action-types';

export function loadPageData (payload) {
  return {
    type: types.LOAD_PAGE_DATA,
    payload: payload
  }
}
