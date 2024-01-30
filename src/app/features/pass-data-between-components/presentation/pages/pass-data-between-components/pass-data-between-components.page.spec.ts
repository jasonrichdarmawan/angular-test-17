import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassDataBetweenComponentsPage } from './pass-data-between-components.page';

describe('PassDataBetweenComponentsPage', () => {
  let component: PassDataBetweenComponentsPage;
  let fixture: ComponentFixture<PassDataBetweenComponentsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassDataBetweenComponentsPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassDataBetweenComponentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
