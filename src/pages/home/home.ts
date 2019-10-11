import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
user: any={
  name: "",
  lastname: "",
  Ph: ""

}
  constructor(public navCtrl: NavController) {

  }

  nextpage(user){
    this.navCtrl.push(DetailsPage, {user: this.user});
  }

}
