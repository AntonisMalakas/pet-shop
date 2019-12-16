import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'homepage',
    loadChildren: './modules/homePageModule/home.module#HomeModule'
  },
  
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'homepage'
  }
];
export const AppRoutes = RouterModule.forRoot(routes);
