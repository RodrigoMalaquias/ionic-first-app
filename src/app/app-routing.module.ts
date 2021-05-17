import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'steps',
    loadChildren: () => import('./steps/steps.module').then( m => m.StepsModule)
  },
  {
    path: 'address',
    loadChildren: () => import("./address/address.module").then(m => m.AddressModule)
  },
  {
    path: 'final',
    loadChildren: () => import("./final/final.module").then(m => m.FinalModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
