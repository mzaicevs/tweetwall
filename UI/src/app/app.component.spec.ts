import { TestBed, async } from '@angular/core/testing';
import { StreamService } from "./stream.service";
import { TweetService } from "./tweet.service";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { LiveWallComponent } from "./live-wall/live-wall.component";
import { SearchSubmitComponent } from "./search-submit/search-submit.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
          AppComponent, SearchInputComponent, LiveWallComponent, SearchSubmitComponent
        ],
        imports: [HttpClientModule],
        providers: [StreamService, TweetService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'twitter wall'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('twitter wall');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('twitter wall');
  }));
});
