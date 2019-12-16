import { NgModule } from '@angular/core';
import { HomeRoutes } from './home.routes';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { ButtonModule, DialogModule } from 'primeng/primeng';
import { AddAnimalComponent } from '../addAnimalModule/addAnimal.component';
import { AddAnimalService } from '../addAnimalModule/addAnimal.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FindAnimalComponent } from '../findAnimalModule/findAnimal.component';
import { PopUpModule } from '../../sharedModules/popUpModule/popUp.module';
import { PopUpComponent } from '../../sharedModules/popUpModule/popUp.component';
import { FindAnimalService } from '../findAnimalModule/findAnimal.service';



@NgModule({
    imports: [HomeRoutes, ButtonModule,ReactiveFormsModule,CommonModule,DialogModule],
    exports: [],
    declarations: [HomeComponent,AddAnimalComponent, FindAnimalComponent, PopUpComponent],
    providers: [HomeService,AddAnimalService, FindAnimalService],
})
export class HomeModule { }
