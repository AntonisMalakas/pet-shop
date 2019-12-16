import { RouterModule, Routes } from '@angular/router';
import { AddAnimalComponent } from './addAnimal.component';


const addAnimalRoutes: Routes = [
    {
        path: 'addAnimal',
        component: AddAnimalComponent,
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

export const addAnimalRouting = RouterModule.forChild(addAnimalRoutes);