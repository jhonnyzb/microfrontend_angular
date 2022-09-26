import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('closebutton') closebutton: any;
  formGroup1!: FormGroup;
  exit: boolean = false;
  correo: string = 'INGRESAR';

  constructor(private readonly fb: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.formGroup1 = this.initForm();
  }


  onSubmit1(): void {
    console.log('aqui', this.formGroup1.value.emailrecovery);
    this.exit = true;
    setTimeout(() => {
      this.closeModal();
    }, 2000);
  }

  initForm(): FormGroup {
    return this.fb.group({
      emailrecovery: ['', [Validators.required, Validators.email]]
    })
  }

  closeModal(): void {
    this.closebutton.nativeElement.click();
    this.formGroup1.reset();
    this.exit = false;
  }

  initSesion(): void{
    this.router.navigate(['mf1']);
  }

}
