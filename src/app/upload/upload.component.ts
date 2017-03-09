
import { Component, OnInit, HostBinding, trigger, transition, animate, style, state } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../_models/index';
import { AlertService, UploadService } from '../_services/index';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
//
import { FileUploader, Headers } from 'ng2-file-upload';

import {NgZone} from '@angular/core';
//import {UPLOAD_DIRECTIVES} from 'ng2-uploader';
//import {bootstrap} from "angular2/platform/browser"

import { ServiceUrl } from '../serviceUrl';



// class FileSelectDirective

//import { FileUploader } from 'ng2-file-upload';
//import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

// const URL = '/api/';
//const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
 // class FileSelectDirective

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
//export class UploadComponent implements OnInit {
export class UploadComponent  implements OnInit {
/*
    model: any = {};
    loading = false;
    returnUrl: string;
    currentUser: User;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
       // private authenticationService: AuthenticationService,
        private alertService: AlertService) { }
*/
/*
    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();

        // get return url from route parameters or default to '/'
       // this.returnUrl = this.route.snapshot.params['returnUrl'] || '/';
        //alert(this.returnUrl);
    }

*/



   @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }
  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'relative';
  }

   /* model: any = {};
    loading = false;
    returnUrl: string;
    currentUser: User;
    id:string;
    private respuestas:boolean[];
    private x: Observable<boolean[]>;
    private errorMessage: string;*/
/*
  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
*/
 public uploadUrl: string;

 public uploader:FileUploader;
 public uploaderOptions: Array<any>;
 constructor(private url:ServiceUrl) { this.uploadUrl=String(this.url.getUrlupload());}

   ngOnInit() {

   alert(this.uploadUrl)
    console.log(this.uploadUrl);
     //var headers = new Headers();
     //headers.append('Content-Type', 'application/x-www-form-urlencoded');
     //headers.append('Access-Control-Allow-Origin','http://localhost:4200');
     //let options = new RequestOptions({ headers: headers });
    this.uploader = new FileUploader({url:this.uploadUrl});
     

  }

}
