import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../../services/http.service";
import {environment} from "../../../environments/environment";
import {Url} from "../../models/url.enum";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public validationForm: FormGroup;
  public get controls() { return this.validationForm.controls; }

  constructor(
    private  formBuilder: FormBuilder,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.formValidation();
  }

  public sendMessage(): any {
    return this.httpService.post(environment.api + Url.Message, {
      name: this.controls.name.value,
      email: this.controls.email.value,
      message: this.controls.message.value,
    }).subscribe((response: any) => {
      console.log(response);
    })
  }

  public formValidation() {
    this.validationForm = this.formBuilder.group({
      email: new FormControl('',[
        Validators.email,
        Validators.required,
      ]),
      name: new FormControl('', [
        Validators.required
      ]),
      message: new FormControl('', [
        Validators.required
      ])
    });
  }

  public map: any = {
    lat: 51.678418,
    lng: 7.809007 };

}
