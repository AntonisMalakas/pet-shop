import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FindAnimalService } from './findAnimal.service';

@Component({
    selector: 'find-animal',
    templateUrl: 'findAnimal.template.html',
    styleUrls: ['./findAnimal.component.css']

})

export class FindAnimalComponent implements OnInit {
    animalId: any;
    animalType: string;
    public id: Number;
    public ownerEmail: string;
    public ownerName: string;
    public ownerPhone: string;
    public petBreed: string;
    public petDay: string;
    public petMonth: string;
    public petYear: string;
    public petGender: string;
    public petType: string;
    public petName: string;
    public petNextVaccine: string;


    constructor(private _activatedRoute: ActivatedRoute, private _findAnimalService: FindAnimalService,
        private _router: Router) { }

    ngOnInit() {

        this._findAnimalService.createFindAnimalFormGroup();
        this._activatedRoute.params.subscribe((params: any) => {
            this.animalId = params['animalId'];
            this.animalType = params['animalType'];

            let objToSend = new Object({
                collectionName: this.animalType,
                fieldName: 'ownerPhone',
                fieldValue: this.animalId
            });
            // this._findAnimalService.actionHandler('', objToSend);
            this._findAnimalService.getAnimalFromDb(objToSend).subscribe((response: any) => {
                let animalInfo = response[0];
                this.id = animalInfo.id;
                this.ownerEmail = animalInfo.ownerEmail;
                this.ownerName = animalInfo.ownerName;
                this.ownerPhone = animalInfo.ownerPhone;
                this.petBreed = animalInfo.petBreed;
                this.petDay = animalInfo.petDay;
                this.petMonth = animalInfo.petMonth;
                this.petYear = animalInfo.petYear;
                this.petName = animalInfo.petName;
                this.petType = animalInfo.petType;
                this.petGender = animalInfo.petGender;
                this._findAnimalService.updateAnimalFormGroup();

            })
        });



    }

    get findAnimalFormGroup() {
        return this._findAnimalService.findAnimalFormGroup;
    }

    public save() {
        this._findAnimalService.saveAnimalInfo().subscribe(response => {
            console.log('saveREspoesne', response)
            if (response) {
                this._router.navigate(['/homepage'])
            }
        });
    }
}