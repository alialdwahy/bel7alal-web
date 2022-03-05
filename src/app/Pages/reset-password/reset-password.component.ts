import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public showPassword = true;
  public Hideassword = false;
  isLoadingPassword: boolean = false;
  UpdataForm: FormGroup | any;
  submittedAdd = false;
  id:any;
  constructor(public Service: ServicesService, private formBuilder: FormBuilder 
    ,private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.EditForm();
  }
  showpass() {
    this.Hideassword = true;
    this.showPassword = false;
    console.log(this.Hideassword, 'hide', this.showPassword, 'show');

  }
  Hidepass() {
    this.Hideassword = false;
    this.showPassword = true;
    console.log(this.Hideassword, this.showPassword);

  }
  private EditForm(): void {
    this.UpdataForm = this.formBuilder.group({
      // id: ["6220b366d98761001069b4cb"],
      password: ["" , [Validators.required]],
    });
  }
  EditPassword() {
    this.submittedAdd = true;
    if (this.UpdataForm.invalid) {
      this.isLoadingPassword = false;
      return;
    }
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id)
    let dataPost: any = {
      password:this.UpdataForm.value.password
    }
    this.Service.postReset(this.id , dataPost).subscribe(
      (Respone) => {
        console.log("Respone : ", Respone);
        this.isLoadingPassword = false;
      },
      (error) => {
        console.log("error :", error);
        this.isLoadingPassword = false;
      },
      ()=>{

      }
    )
  }
  get addSaveValid() {
    return this.UpdataForm.controls;
  }

}
