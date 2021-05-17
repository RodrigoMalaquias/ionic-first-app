import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {


  constructor(private route: Router) { }

  ngOnInit() {}

  // nextPage(){
  //   this.route.navigateByUrl("/final")
  // }

  onSubmit(form){
    console.log(form)
  }

  

}
