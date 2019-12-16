import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AddAnimalComponent } from '../addAnimalModule/addAnimal.component';
import { FindAnimalComponent } from '../findAnimalModule/findAnimal.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'add',
    component: AddAnimalComponent
  },
  {
    path: 'find/:animalId/:animalType',
    component: FindAnimalComponent
  }


];


export const HomeRoutes = RouterModule.forChild(routes);