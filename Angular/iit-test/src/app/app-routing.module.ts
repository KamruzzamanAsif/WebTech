import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {path:"users", component:UsersComponent},
  {path:"registrationForm", component:RegistrationComponent},
  {path:"userUpdate", component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
