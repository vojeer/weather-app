import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreandingAssetsComponent } from './treanding-assets.component';

describe('TreandingAssetsComponent', () => {
  let component: TreandingAssetsComponent;
  let fixture: ComponentFixture<TreandingAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreandingAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreandingAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
