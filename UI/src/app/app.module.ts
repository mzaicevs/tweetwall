import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchSubmitComponent } from './search-submit/search-submit.component';
import { LiveWallComponent } from './live-wall/live-wall.component';

import { StreamService } from './stream.service';
import { TweetService } from './tweet.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchSubmitComponent,
    LiveWallComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TweetService, StreamService],
  bootstrap: [AppComponent]
})

export class AppModule { }
