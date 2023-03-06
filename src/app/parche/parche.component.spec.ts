import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcheComponent } from './parche.component';

describe('ParcheComponent', () => {
  let component: ParcheComponent;
  let fixture: ComponentFixture<ParcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
