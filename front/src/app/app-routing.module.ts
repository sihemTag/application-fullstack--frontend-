import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/auth/components/register/register/register.component';
import { LoginComponent } from './pages/auth/components/login/login.component';
import { ArticlesComponent } from './pages/article/articles/articles.component';
import { AccountComponent } from './pages/auth/components/account/account.component';

// consider a guard combined with canLoad / canActivate route option
// to manage unauthenticated user to access private routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'account', component:AccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
