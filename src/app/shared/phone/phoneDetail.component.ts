import { HostListener } from '@angular/core';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PhoneModel } from '../../models/phone.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Paths } from '../../app.routes';
@Component({
    selector: 'phone-detail',
    templateUrl: './phoneDetail.component.html',
    styleUrls: ['./phoneDetail.component.scss']
})
export class PhoneDetailComponent {

  isHome:Boolean = true; //determine if the route is /home
  @Input() item: PhoneModel;

  constructor(private router: Router) {
    this.isHome = ( this.router.url === Paths.HOME );
  }
}
