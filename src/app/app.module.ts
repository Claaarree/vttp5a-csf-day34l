import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponent } from './component/example/example.component';
import { FileUploadComponent } from './component/file-upload/file-upload.component';
import { provideHttpClient } from '@angular/common/http';
import { GalleryComponent } from './component/gallery/gallery.component';
import { CreateEmployeeComponent } from './component/create-employee/create-employee.component';
import { ListEmployeeComponent } from './component/list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';
import { DetailsEmployeeComponent } from './component/details-employee/details-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    FileUploadComponent,
    GalleryComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent,
    UpdateEmployeeComponent,
    DetailsEmployeeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(), provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
