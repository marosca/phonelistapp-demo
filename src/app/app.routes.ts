import { RouterModule, Routes } from '@angular/router';
import { PhoneListContainer } from './pages/phoneListContainer/phoneListContainer.component';

const app_routes: Routes = [
  //duplicate component to test that the first one (route home) loads data from http
  //request, the second one (navigate to phone) loads data from store
  { path: 'home', component: PhoneListContainer },
  { path: 'phones', component: PhoneListContainer },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes, {useHash: false});

export const Paths = {
  HOME: '/home',
  PHONES: '/phones'
}
