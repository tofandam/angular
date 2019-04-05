import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KONRADComponent } from './konrad.component';

describe('KONRADComponent', () => {
  let component: KONRADComponent;
  let fixture: ComponentFixture<KONRADComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KONRADComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KONRADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
