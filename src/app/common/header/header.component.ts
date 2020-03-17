import { Component, OnInit } from '@angular/core';
import {MDBModalRef, MDBModalService} from "angular-bootstrap-md";
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) { }

  ngOnInit(): void {
  }
  public openModal() {
    this.modalRef = this.modalService.show(ModalComponent)
  }
}
