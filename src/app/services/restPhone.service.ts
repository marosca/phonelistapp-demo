import { API_URL } from './../config.opaque';
import { PhoneModel } from './../models/phone.model';
import { Http, Response, Headers } from '@angular/http';
import { Inject, Injectable } from '@angular/core';

//import 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RestPhoneService {

    constructor(private http:Http, @Inject(API_URL) private apiUrl: string){
    }

    get():Observable<PhoneModel[]> {
      return this.http.get(`${this.apiUrl}/phones`)
        .map((res:Response) => res.json().phones)
    }
}
