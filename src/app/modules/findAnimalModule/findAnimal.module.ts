import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/primeng';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { findAnimalRouting } from './findAnimal.routes';
import { FindAnimalComponent } from './findAnimal.component';
import { FindAnimalService } from './findAnimal.service';



@NgModule({
    imports: [findAnimalRouting, ButtonModule, CommonModule,ReactiveFormsModule],
    exports: [],
    declarations: [FindAnimalComponent],
    providers: [FindAnimalService],
})
export class HomeModule { }
