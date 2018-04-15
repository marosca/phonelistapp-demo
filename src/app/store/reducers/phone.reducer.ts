import { PhoneModel } from '../../models/phone.model';
import { Actions, PhonesActions } from "../actions/phone.actions";

export interface PhoneState {
    list: PhoneModel[]
}

const initialState = {
    list: null
};

export function reducer(state:PhoneState = initialState, action:PhonesActions){
    switch(action.type){
        case Actions.GET_PHONES_ACTION:
          return {...state, list: action.payload };
        default:
        return state;
    }
}
