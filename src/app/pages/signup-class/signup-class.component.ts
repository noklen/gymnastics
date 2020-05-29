import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Url} from "../../models/url.enum";
import {HttpService} from "../../services/http.service";
import {NotificationsService, NotificationType} from "angular2-notifications";
import {Router} from "@angular/router";

const TITLE_SUCCESS = 'Успешно';
const CONTENT_SUCCESS = 'Ваша форма была успешно отправлена';
const TITLE_ERROR = 'Ошибка';
const CONTENT_ERROR = 'К сожалению ваша форма не была отправлена';

@Component({
  selector: 'app-signup-class',
  templateUrl: './signup-class.component.html',
  styleUrls: ['./signup-class.component.scss']
})
export class SignupClassComponent implements OnInit {
  public validationForm: FormGroup;
  public  submitted = false;
  public get controls() { return this.validationForm.controls; }

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private notifications: NotificationsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formValidation();
  }

  public registerRequest(): any {
    return this.httpService.post(Url.Registration, {
      email: this.controls.email.value,
      firstName: this.controls.firstName.value,
      lastName: this.controls.lastName.value,
      age: this.controls.age.value,
    }).subscribe( (response: any) => {
      this.router.navigate(['']);
      this.notifications.create(`${response.status} ${TITLE_SUCCESS}`, CONTENT_SUCCESS, NotificationType.Success);
    }, error => {
      this.notifications.create(`${error.status} ${TITLE_ERROR}`, CONTENT_ERROR, NotificationType.Error)
      });
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
      ]),
      age: new FormControl('', [
        Validators.required,
      ]),
    });
  }

}
