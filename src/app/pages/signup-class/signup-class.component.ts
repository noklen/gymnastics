import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";
import {Url} from "../../models/url.enum";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-signup-class',
  templateUrl: './signup-class.component.html',
  styleUrls: ['./signup-class.component.scss']
})
export class SignupClassComponent implements OnInit, AfterViewInit {
  public validationForm: FormGroup;
  public get controls() { return this.validationForm.controls; }
  @ViewChild('nameField') private nameField: ElementRef;

  constructor(
    private  formBuilder: FormBuilder,
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.formValidation();
    console.log(this.controls.errors)
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.nameField.nativeElement.focus();
    }, 600);
  }

  public registerRequest(): any {
    return this.httpService.post(Url.Registration, {
      email: this.controls.email.value,
      firstName: this.controls.firstName.value,
      lastName: this.controls.lastName.value,
      age: this.controls.age.value,
    }).subscribe( (request: any) => {
      console.log(request);
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
        Validators.min(7),
      ])
    });
  }

}
