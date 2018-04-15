import { Component, OnInit } from '@angular/core';
import { PhoneModel } from './../../models/phone.model';
import { RestPhoneService } from '../../services/restPhone.service';
import { PhoneAction } from '../../store/actions/phone.actions';
import { State, Store } from '@ngrx/store';


@Component({
    selector: 'phone-list-container',
    templateUrl: './phoneListContainer.component.html',
    styleUrls: ['./phoneListContainer.component.scss']
})
export class PhoneListContainer implements OnInit {
    listOfPhones: PhoneModel[];
    origin:String;
    errorMsg:String;

    constructor(private phoneAction: PhoneAction, private store: Store<any>) {
      this.origin = "ngxr Store";
    }

    //load phones from store. If the list is null, then make an http request
    //to rest api to get the list of phones
    getPhonesFromStore() {
      this.store.select('phone').subscribe(phone => {
        if (phone) {
          phone && !phone.list && this.getPhonesFromApi(this);
          this.listOfPhones = phone.list;
        }
      });
    }
    getPhonesFromApi(context) {
      this.phoneAction.getPhones()
        .catch( e => {
          context.errorMsg = "Upp, hay un error, ¿has levantado el server (API)?";
        });
      this.origin = "Api Externa";
  }

    ngOnInit(){
      this.getPhonesFromStore();
    }
}
