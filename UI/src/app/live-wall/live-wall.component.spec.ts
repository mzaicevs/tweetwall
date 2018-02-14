import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {LiveWallComponent} from './live-wall.component';

describe('LiveWallComponent', () => {
  let component: LiveWallComponent;
  let fixture: ComponentFixture<LiveWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveWallComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
