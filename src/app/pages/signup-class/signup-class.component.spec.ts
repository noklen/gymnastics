import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupClassComponent } from './signup-class.component';

describe('SignupClassComponent', () => {
  let component: SignupClassComponent;
  let fixture: ComponentFixture<SignupClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
