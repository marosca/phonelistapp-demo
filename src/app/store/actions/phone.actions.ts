import { Injectable } from '@angular/core';
import { Action, Store, State } from '@ngrx/store';
import { PhoneModel } from '../../models/phone.model';
import { RestPhoneService } from '../../services/restPhone.service';

//import { State } from '../reducers/index';


const GET_PHONES_ACTION = 'GET_PHONES_ACTION';

export const Actions = {
    GET_PHONES_ACTION,
};

export type PhonesActions = GetPhonesAction;

class GetPhonesAction implements Action {
    type:string = GET_PHONES_ACTION;

    constructor(public payload: PhoneModel[]){}
}

@Injectable()
export class PhoneAction {

    constructor(private _restPhoneService: RestPhoneService, private store: Store<any>){}

    getPhones(){
      return this._restPhoneService.get().toPromise().then(data => {
          this.store.dispatch(new GetPhonesAction(data));
      });
  }
}
