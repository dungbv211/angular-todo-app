import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementInjectComponent } from './element-inject.component';

describe('ElementInjectComponent', () => {
  let component: ElementInjectComponent;
  let fixture: ComponentFixture<ElementInjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementInjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
