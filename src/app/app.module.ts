import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponent } from './component/example/example.component';
import { FileUploadComponent } from './component/file-upload/file-upload.component';
import { provideHttpClient } from '@angular/common/http';
import { GalleryComponent } from './component/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    FileUploadComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideHttpClient(), provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
