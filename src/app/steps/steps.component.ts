import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {}
  
  teste = "btn";

  breadCommun: boolean = false;
  saladCommun: boolean = false;
  meatBeef: boolean = false;

  breadTrad: boolean = false;
  saladTrad: boolean = false;
  meatChicken : boolean = false;

  breadView: boolean = false;
  saladView: boolean = false;
  meatView: boolean = false;
  successView: boolean = false;

  breadCommunChange(){
    this.breadCommun = !this.breadCommun;
    this.saladView = !this.saladView;
    this.breadView = !this.breadView;
  }

  breadTradChange(){
    this.breadTrad = !this.breadTrad;
    this.saladView = !this.saladView;
    this.breadView = !this.breadView;
  }

  saladCommunChange(){
    this.saladCommun = !this.saladCommun;
    this.saladView = !this.saladView;
    this.meatView = !this.meatView;
  }

  saladTradChange(){
    this.saladTrad = !this.saladTrad;
    this.saladView = !this.saladView;
    this.meatView = !this.meatView;
  }

  meatBeefChange(){
    this.meatBeef = !this.meatBeef;
    this.meatView = !this.meatView;
    this.successView = !this.successView;
  }

  meatChickenChange(){
    this.meatChicken = !this.meatChicken;
    this.meatView = !this.meatView;
    this.successView = !this.successView;
  }

  nextPage(){
    this.route.navigateByUrl("/address")
  }

}
