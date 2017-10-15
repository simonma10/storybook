
import * as types from './page-action-types';

const initialState = {
  title:'',
  asset:'',
  subs:[]
};

export default function pageReducer(state = initialState, action){

  switch (action.type){
    case types.LOAD_PAGE_DATA:
      let data = action.payload;
      return Object.assign({}, state, {
        title: data.title,
        asset: data.asset,
        subs: data.subs
      })


    default:
      return state;

  }

}