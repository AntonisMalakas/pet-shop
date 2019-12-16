import { NgModule } from '@angular/core';

import { CalendarModule, DialogModule, ButtonModule } from 'primeng/primeng';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { PopUpComponent } from './popUp.component';

@NgModule({
    imports: [CommonModule,DialogModule,ButtonModule],
    declarations: [PopUpComponent],
    providers:[],
    exports:[PopUpComponent]
})
export  class PopUpModule {
    constructor() {

    }

}