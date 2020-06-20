import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonMathliveComponent } from './ionic-mathlive.component';

describe('IonicMathliveComponent', () => {
  let component: IonMathliveComponent;
  let fixture: ComponentFixture<IonMathliveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonMathliveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonMathliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
