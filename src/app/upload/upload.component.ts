
import { Component, OnInit, HostBinding, trigger, transition, animate, style, state } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../_models/index';
import { AlertService, UploadService } from '../_services/index';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
<<<<<<< HEAD
//
import { FileUploader } from 'ng2-file-upload';

=======
import { FileUploader, Headers } from 'ng2-file-upload';
>>>>>>> be7836ed29567343220c9b8828339bb5551c41fb
import {NgZone} from '@angular/core';
import { ServiceUrl } from '../serviceUrl';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],

    animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.8s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]

})

export class UploadComponent  implements OnInit {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }
  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'relative';
  }

 loading = false;
 private respuestas:boolean[];
 private x: Observable<boolean[]>;
 private errorMessage: string;
 public idseguimiento: number;


 public uploadUrl: string;
 public filneName: string;
 public uploader:FileUploader;
 public uploaderOptions: Array<any>;
 public item: any = {};
 constructor(
   private url:ServiceUrl,
   private route: ActivatedRoute,
   private router: Router,
   private uploadservice: UploadService,
   private alertService:AlertService) 
   { 
     this.uploadUrl=String(this.url.getUrlupload());
     this.idseguimiento= this.route.snapshot.params['id_seguimiento']; 
    
  }
  ngOnInit() {

   //alert(this.uploadUrl);
    console.log(this.uploadUrl);
<<<<<<< HEAD
     var headers = new Headers();
     headers.append('Content-Type', 'application/x-www-form-urlencoded');
     headers.append('Access-Control-Allow-Origin','http://localhost:4200');
     let options = new RequestOptions({ headers: headers });
    this.uploader = new FileUploader({url:this.uploadUrl});


=======
    this.uploader = new FileUploader({url:this.uploadUrl});
>>>>>>> be7836ed29567343220c9b8828339bb5551c41fb
  }
  
FileName(index: number) {
    //console.log("Imprimiendo FileUploader: "+this.uploader.queue[index].file.name);
      
        this.x=this.route.params
        .switchMap ((params: Params)=>
        {
          return this.uploadservice.filename(this.uploader.queue[index].file.name, this.idseguimiento)
        })

        this.x.subscribe(
          data => {
            this.router.navigate(['/boton-buscar']);
            this.respuestas = data;
            this.alertService.success("Su archivo subió exitosamente...");
          },
          error =>  {
            this.errorMessage = <any>error
            this.alertService.error("Ups! Algo pasó, no se pudo subir su archivo, inténtalo de nuevo");
          }
        );
    };

}
