import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing/app-routing.module';
<<<<<<< HEAD
=======
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';

>>>>>>> fc7f55190b0e9dc1cc0436293073b68d8ae9a8d7
import 'hammerjs';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
<<<<<<< HEAD
import { AdminComponent } from './admin/admin.component';
=======
import { RegisterformComponent } from './registerform/registerform.component';
>>>>>>> fc7f55190b0e9dc1cc0436293073b68d8ae9a8d7

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
<<<<<<< HEAD
    AdminComponent
=======
    RegisterformComponent
>>>>>>> fc7f55190b0e9dc1cc0436293073b68d8ae9a8d7
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
<<<<<<< HEAD
    AppRoutingModule
=======
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule
>>>>>>> fc7f55190b0e9dc1cc0436293073b68d8ae9a8d7
  ],
  providers: [],
  entryComponents: [
    RegisterformComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
