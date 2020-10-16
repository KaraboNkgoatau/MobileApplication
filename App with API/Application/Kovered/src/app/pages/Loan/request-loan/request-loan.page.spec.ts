import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestLoanPage } from './request-loan.page';

describe('RequestLoanPage', () => {
  let component: RequestLoanPage;
  let fixture: ComponentFixture<RequestLoanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestLoanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestLoanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
