import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwolistselctionComponent } from './twolistselction.component';

describe('TwolistselctionComponent', () => {
  let component: TwolistselctionComponent;
  let fixture: ComponentFixture<TwolistselctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwolistselctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwolistselctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
