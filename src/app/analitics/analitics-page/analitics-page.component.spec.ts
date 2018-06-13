import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliticsPageComponent } from './analitics-page.component';

describe('AnaliticsPageComponent', () => {
  let component: AnaliticsPageComponent;
  let fixture: ComponentFixture<AnaliticsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaliticsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaliticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
