import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector:    'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls:  ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(
     private router: Router

  ) { }

  ngOnInit() {
  }

  title = 'Contacto';

}
