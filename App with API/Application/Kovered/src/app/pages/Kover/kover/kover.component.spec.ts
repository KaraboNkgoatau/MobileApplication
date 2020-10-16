import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KoverComponent } from './kover.component';

describe('KoverComponent', () => {
  let component: KoverComponent;
  let fixture: ComponentFixture<KoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
