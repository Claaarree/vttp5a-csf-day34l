import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from '../component/list-employee/list-employee.component';
import { CreateEmployeeComponent } from '../component/create-employee/create-employee.component';
import { DetailsEmployeeComponent } from '../component/details-employee/details-employee.component';
import { ExampleComponent } from '../component/example/example.component';
import { FileUploadComponent } from '../component/file-upload/file-upload.component';
import { GalleryComponent } from '../component/gallery/gallery.component';
import { UpdateEmployeeComponent } from '../component/update-employee/update-employee.component';
import { RouteGuardService } from '../service/route-guard.service';
import { TestComponent } from '../component/test/test.component';
import { DeactivateGuardService } from '../service/deactivate-guard.service';
import { DebounceComponent } from '../component/debounce/debounce.component';

const routes: Routes = [
  {path: "", component: ListEmployeeComponent},
  {path: "employeeList" , component: ListEmployeeComponent},
  {path: "employeeCreate" , component: CreateEmployeeComponent},
  {path: "employeeDetails/:id" , component: DetailsEmployeeComponent},
  {path: "employeeUpdate/:id" , component: UpdateEmployeeComponent, canActivate:[RouteGuardService]},
  {path: "example" , component: ExampleComponent},
  {path: "fileUpload" , component: FileUploadComponent},
  {path: "gallery" , component: GalleryComponent},
  {path: "debounce" , component: DebounceComponent},
  {path: "test" , component: TestComponent, canDeactivate: [DeactivateGuardService]},
  {path: "**" , redirectTo: "/", pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
