import { Component, OnInit } from '@angular/core';
import { AddAnimalService } from './addAnimal.service';
import { Router } from '@angular/router';

@Component({
    selector: 'add-animal',
    templateUrl: 'addAnimal.template.html',
    styleUrls: ['./addAnimal.component.css']
    
})

export class AddAnimalComponent implements OnInit {
    constructor(private _addAnimalService: AddAnimalService, private _router:Router) { }

    ngOnInit() {
        console.log('hi')
        this._addAnimalService.createAddAnimalFormGroup();
     }

    get addAnimalFormGroup() {
        return this._addAnimalService.addAnimalFormGroup;
    }

    registerNewAnimal(){
        // this._addAnimalService.actionHandler("registerNewAnimal")
        this._addAnimalService.registerNewAnimal().subscribe((resp: any) => {
            this._router.navigate(['/homepage'])
        })
    }
    errorDialogStatusChanged(event){
        console.log('hellowz');
    }
    public get animalInfo(){
        return this._addAnimalService.animalInfo as any;
    }
    get closeDialog(){
        return this._addAnimalService.closeDialog;
    }


}