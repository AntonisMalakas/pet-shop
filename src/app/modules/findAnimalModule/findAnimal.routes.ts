import { RouterModule, Routes } from '@angular/router';
import { FindAnimalComponent } from './findAnimal.component';


const findAnimalRoutes: Routes = [
    {
        path: 'find/:animalId/:animalType',
        component: FindAnimalComponent,
        // children: [
        //     {
        //         path: 'globalVariable',
        //         component: GlobalVariableComponent
        //     },
        //     {
        //         path: 'globalVariable/:id',
        //         component: GlobalVariableComponent
        //     }
        // ]
    }
];

export const findAnimalRouting = RouterModule.forChild(findAnimalRoutes);