import { Component, OnInit } from '@angular/core';
import {BusinessContactDetailsService} from '../Shared/Service/business-contact-details.service'

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
 
  
  DetailsData: any

  constructor( private api: BusinessContactDetailsService) { this.DetailsData = [] }


  ngOnInit() {
 
    
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

