import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseService } from '../../baseService';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder } from '@angular/forms';
@Injectable()
export class HomeService extends BaseService {
    /**
     *
     */
    public findAnimalFormGroup: FormGroup;
    constructor(private _http: Http, private _fb: FormBuilder) {
        super(_http)
    }

    createFindAnimalFormGroup() {
        this.findAnimalFormGroup = this._fb.group({
            animalId:[''],
            animalType:['']
        });
    }
    actionHandler(action: string, payload?: any) {
        switch (action) {


            default:
                break;
        }
    }

}
