import { NgModule } from '@angular/core';

import { ButtonModule, DialogModule } from 'primeng/primeng';
import { addAnimalRouting } from './addAnimal.routes';
import { AddAnimalComponent } from './addAnimal.component';
import { AddAnimalService } from './addAnimal.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PopUpModule } from '../../sharedModules/popUpModule/popUp.module';
import { PopUpComponent } from '../../sharedModules/popUpModule/popUp.component';



@NgModule({
    imports: [addAnimalRouting, ButtonModule, CommonModule,ReactiveFormsModule, PopUpModule, DialogModule],
    exports: [],
    declarations: [AddAnimalComponent, PopUpComponent],
    providers: [AddAnimalService],
})
export class HomeModule { }
