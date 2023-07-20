import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneComponent } from './components/phone/phone.component';
import { FormsModule } from "@angular/forms";
import { GalleryComponent } from './components/gallery/gallery.component';

import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';

const appRoutes: Routes = [
  {path: "", component: PhoneComponent},
  {path: "gallery", component: GalleryComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    GalleryComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
