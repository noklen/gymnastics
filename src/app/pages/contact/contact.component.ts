import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../../services/http.service";
import {Url} from "../../models/url.enum";
import {NotificationsService, NotificationType} from "angular2-notifications";

const TITLE_SUCCESS = 'Успешно';
const CONTENT_SUCCESS = 'Ваша форма была успешно отправлена';
const TITLE_ERROR = 'Ошибка';
const CONTENT_ERROR = 'К сожалению ваша форма не была отправлена';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public validationForm: FormGroup;
  public  submitted = false;

  public get controls() {
    return this.validationForm.controls;
  }

  constructor(
    private  formBuilder: FormBuilder,
    private httpService: HttpService,
    private notifications: NotificationsService,
  ) {
  }

  ngOnInit(): void {
    this.formValidation();
  }

  public sendMessage(): any {
    return this.httpService.post(Url.Message, {
      firstName: this.controls.firstName.value,
      lastName: this.controls.lastName.value,
      email: this.controls.email.value,
      message: this.controls.message.value,
    }).subscribe((response: any) => {
      this.notifications.create(`${response.status} ${TITLE_SUCCESS}`, CONTENT_SUCCESS, NotificationType.Success);
    },error => {
      this.notifications.create(`${error.status} ${TITLE_ERROR}`, CONTENT_ERROR, NotificationType.Error)
    })
  }

  public formValidation() {
    this.validationForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
      ]),
      firstName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.required
      ]),
      message: new FormControl('', [
        Validators.required
      ])
    });
  }

  public map: any = {
    lat: 50.071540,
    lng: 14.405700,
  };
}
