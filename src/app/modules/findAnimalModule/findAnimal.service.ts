import { Injectable } from '@angular/core';
import { BaseService } from '../../baseService';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class FindAnimalService extends BaseService {
    /**
     *
     */
    public responseFromServer: any;
    public findAnimalFormGroup: FormGroup;
    public id: Number;
    public dbName: string;

    constructor(private _http: Http, private _fb: FormBuilder) {
        super(_http);

    }

    public createFindAnimalFormGroup() {
        this.findAnimalFormGroup = this._fb.group({

            petNextVaccine: ['', [Validators.required]],
        })
    }

    public getAnimalFromDb(payload) {
        return new Observable((observer: any) => {

            let collectionName = payload.collectionName;
            let fieldName = payload.fieldName;
            let fieldValue = payload.fieldValue;
            this.mongoFilterData(collectionName, fieldName, fieldValue).subscribe(resp => {
                console.log('resp', resp)
                this.responseFromServer = resp[0];
                observer.next(resp);
            })
        })
    }
    public updateAnimalFormGroup() {
        this.findAnimalFormGroup.patchValue({
            petNextVaccine: this.responseFromServer.petNextVaccine
        })
    }


    public saveAnimalInfo() {
        return new Observable((observer: any) => {

            console.log('sdasdasd', this.findAnimalFormGroup)
            this.responseFromServer['petNextVaccine'] = this.findAnimalFormGroup.controls.petNextVaccine.value;
            this.mongoUpdate(this.responseFromServer.petType.toLowerCase(), this.responseFromServer)
                .subscribe(resp => {
                    observer.next(resp);
                })

        })
    }

    public actionHandler(action: string, payload?: any): void {
        switch (action) {
            case 'getAnimalFromDb':
                this.getAnimalFromDb(payload);
                break;
            case 'saveAnimalInfo':
                this.saveAnimalInfo();
                break;
            default:
                break;
        }
    }
}