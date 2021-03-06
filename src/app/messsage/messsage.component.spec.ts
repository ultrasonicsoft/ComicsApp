import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesssageComponent } from './messsage.component';

describe('MesssageComponent', () => {
  let component: MesssageComponent;
  let fixture: ComponentFixture<MesssageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesssageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesssageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
