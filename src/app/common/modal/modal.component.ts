import { Component, OnInit } from '@angular/core';
import {MDBModalRef} from "angular-bootstrap-md";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
   public validationForm: FormGroup;
  public get controls() { return this.validationForm.controls; }

  constructor(
    public modalRef: MDBModalRef,
    private  formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formValidation();
  }

  public formValidation() {
     this.validationForm = this.formBuilder.group({
       email: new FormControl('',[
         Validators.email,
         Validators.required,
       ]),
       firstName: new FormControl('', [
         Validators.required
       ]),
       lastName: new FormControl('', [
         Validators.required
       ])
     })

  }

}
