import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorsComponent } from './components/creators/creators.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'news',
    component: NewsComponent
  },
  {
    path: 'creators',
    component: CreatorsComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
