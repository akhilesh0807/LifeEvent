import { Routes } from '@angular/router';

// import { MenuComponent } from '../menu/menu.component';
// import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
<<<<<<< HEAD
=======
import { RegisterformComponent } from '../registerform/registerform.component';
>>>>>>> fc7f55190b0e9dc1cc0436293073b68d8ae9a8d7

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  {path: 'contactus', component: ContactComponent},
  {path: 'aboutus' , component: AboutComponent},
<<<<<<< HEAD
  // { path: 'menu',     component: MenuComponent },
=======
  { path: 'form',     component: RegisterformComponent },
>>>>>>> fc7f55190b0e9dc1cc0436293073b68d8ae9a8d7
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
