import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolicComponent } from './polic.component';

describe('PolicComponent', () => {
  let component: PolicComponent;
  let fixture: ComponentFixture<PolicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
