import { Component, OnInit, AfterViewInit, OnChanges, OnDestroy, SimpleChanges,EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'pop-up',
    templateUrl: 'popUp.template.html'
})

export class PopUpComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

    @Output() onStatusChange = new EventEmitter<boolean>();
    @Input() code: string;
    @Input() message: string;
    @Input() visible: boolean;

    public animalCode: string;
    public animalMessage: string;
    public showPopUp: boolean

    
    constructor() { }
    ngOnInit() { 

    }
    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes['code'] || changes['message'] || changes['visible']) {
            this.animalCode = this.code;
            this.animalMessage = this.message;
            this.showPopUp = this.visible;
        }
    }
    ngAfterViewInit(): void {
        throw new Error("Method not implemented.");
    }

    public changeStatus(status: boolean): void {
        this.onStatusChange.emit(status);
    
    }

}