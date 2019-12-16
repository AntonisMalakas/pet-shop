import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'home-page',
    templateUrl: 'home.template.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    animalId: any;
    animalType: string;
    constructor(private _homeService: HomeService, private _router: Router,
        private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        console.log('hi')
        this._homeService.createFindAnimalFormGroup();
    }
    get findAnimalFormGroup() {
        return this._homeService.findAnimalFormGroup;
    }
    addNewAnimal() {
        // this._router.navigate(['addAnimal'], { relativeTo: this._activatedRoute })
        this._router.navigate(['add'], { relativeTo: this._activatedRoute })
    }
    find() {
        this.animalId = this._homeService.findAnimalFormGroup.controls.animalId.value;
        this.animalType = this._homeService.findAnimalFormGroup.controls.animalType.value;

        // this._router.navigate(['find',this.animalId ,this.animalType], { relativeTo: this._activatedRoute });
        this._router.navigate(['find',this.animalId ,this.animalType], { relativeTo: this._activatedRoute });
        
    }
    viewAllAnimals() {

    }

}