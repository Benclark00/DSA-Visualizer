import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArraysComponent } from './arrays/arrays.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home page'},
    {path: 'arrays', component: ArraysComponent, title: 'Arrays page'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}