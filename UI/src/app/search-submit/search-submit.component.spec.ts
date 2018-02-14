import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchSubmitComponent } from './search-submit.component';
import {HttpClientModule} from '@angular/common/http';
import {TweetService} from '../tweet.service';

describe('SearchSubmitComponent', () => {
  let component: SearchSubmitComponent;
  let fixture: ComponentFixture<SearchSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSubmitComponent ],
      imports: [HttpClientModule],
      providers: [TweetService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
