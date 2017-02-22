import { Component, OnInit } from '@angular/core';

import { AlertService } from '../_services/index';

@Component({
    //moduleId: module.id,
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent {
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => {
<<<<<<< HEAD

=======
>>>>>>> f5b449487558c18f7a3b7702f192191d8f16901e
        	//alert('el mensaje dentro del typscript del alertcomponent '+message);
        	this.message = message; //este es el objeto que contiene todas las propiedades del mensaje a mostrar

        });
    }


}