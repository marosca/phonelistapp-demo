import * as phone from './phone.reducer';

export interface State  {
    phone: phone.PhoneState
}

export const reducers = {
    phone: phone.reducer
}

