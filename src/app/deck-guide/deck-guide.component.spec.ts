import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckGuideComponent } from './deck-guide.component';

describe('DeckGuideComponent', () => {
  let component: DeckGuideComponent;
  let fixture: ComponentFixture<DeckGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
