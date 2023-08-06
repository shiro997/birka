import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Birka Bills';

  modal:Modal|undefined;
  body = <HTMLElement>document.body;
  mode = "light";
  signInGroup: FormGroup;

  sesion=sessionStorage.getItem('sesion');

   /**
   *
   */
   constructor(private formBuilder: FormBuilder) {
    this.signInGroup = this.formBuilder.group({
      Email: ['',Validators.required],
      Password: ['', Validators.required]
    })
  }

  openModalLogin(){
    this.modal = new Modal(<HTMLElement>document.getElementById('login'))
    this.modal?.show();
  }

  onCloseModal(){
    this.modal?.hide();
  }

  change(event:any){
    let nav = <HTMLElement>document.getElementById('nav');
    if (this.body.classList.contains('dark')) {
      this.body.classList.replace('dark', 'light');
      nav.classList.replace('navbar-dark','navbar-light');
      nav.classList.replace('bg-dark','bg-light');
      this.mode = 'light';
    } else {
      this.body.classList.replace('light', 'dark');
      nav.classList.replace('navbar-light','navbar-dark');
      nav.classList.replace('bg-light','bg-dark');
      this.mode = 'dark';
    }
  };
}
