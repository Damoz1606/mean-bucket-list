import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBucketComponent } from './input-bucket.component';

describe('InputBucketComponent', () => {
  let component: InputBucketComponent;
  let fixture: ComponentFixture<InputBucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBucketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
