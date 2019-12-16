import { Router, ActivatedRoute } from '@angular/router';
import { BaseService } from '../../baseService';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AddAnimalService extends BaseService {
    /**
     *
     */
    public animalIdAfterAdd: any;
    public addAnimalFormGroup: FormGroup;
    private _animalInfo: Object;
    public closeDialog: Boolean;
    constructor(private _router: Router, private _activatedRoute: ActivatedRoute,
        private _http: Http, private _fb: FormBuilder) {
        super(_http);


    }
    init() {

    }
    public createAddAnimalFormGroup() {
        this.addAnimalFormGroup = this._fb.group({
            id: [''],
            petName: ['', [Validators.required]],
            petType: ['', [Validators.required]],
            petBreed: ['', [Validators.required]],
            petDay: ['', [Validators.required]],
            petMonth: ['', [Validators.required]],
            petYear: ['', [Validators.required]],
            petGender: ['', [Validators.required]],
            ownerName: ['', [Validators.required]],
            ownerEmail: ['', [Validators.required]],
            ownerPhone: ['', [Validators.required]],
        })
    }

    registerNewAnimal() {
        return new Observable((observer: any) => {

            console.log('formgroup', this.addAnimalFormGroup)
            let collectionName = this.addAnimalFormGroup.controls.petType.value;
            let objToSend = new Object({
                id: '',
                petName: this.addAnimalFormGroup.controls.petName.value,
                petType: this.addAnimalFormGroup.controls.petType.value,
                petBreed: this.addAnimalFormGroup.controls.petBreed.value,
                petDay: this.addAnimalFormGroup.controls.petDay.value,
                petMonth: this.addAnimalFormGroup.controls.petMonth.value,
                petYear: this.addAnimalFormGroup.controls.petYear.value,
                petGender: this.addAnimalFormGroup.controls.petGender.value,
                ownerName: this.addAnimalFormGroup.controls.ownerName.value,
                ownerEmail: this.addAnimalFormGroup.controls.ownerEmail.value,
                ownerPhone: this.addAnimalFormGroup.controls.ownerPhone.value,
            })
            this.mongoAdd(collectionName, objToSend).subscribe(resp => {

          
                this.animalIdAfterAdd = resp;
                this.closeDialog = true;
                observer.next(resp);
                // alert(resp)

            })
        })

    }

    public get animalInfo() {
        return this._animalInfo;
    }

    actionHandler(action: string, payload?: any) {
        switch (action) {
            case 'registerNewAnimal':
                this.registerNewAnimal();
                break;

            default:
                break;
        }
    }
}