import { Component, OnInit } from '@angular/core';
import {ContactUsService} from '../Shared/Services/contact-us.service'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
 // dtOptions: DataTables.Settings = {};
  DetailsData: any
  constructor( private api: ContactUsService) { this.DetailsData = [] }

  ngOnInit() {
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 10
    // };
    this.getDetails();
  }

  getDetails() {
    this.api.getBusinessContactDetails().subscribe(response => {
      console.log(response);
      this.DetailsData = response;
    })
  }


  deleteDetails(detail) {

    this.api.deleteBusinessContactDetails(detail.BusinessBankingDetailsID).subscribe(Response => {
      this.getDetails();
    });
  }
}
