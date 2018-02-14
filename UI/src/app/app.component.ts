import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { StreamService } from './stream.service';
import { SearchResult } from './models/search-result';
import { Tweet } from './models/tweet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'twitter wall';
  query: string;
  tweets: Tweet[] = [];
  stream: Subscription;
  tweetsPerPage: number = 9;

  constructor(private streamService: StreamService) { }

  onSearchInput(query: string) {
    this.query = query;
  }

  onSearchResults(result: SearchResult) {
    this.tweets = result.tweets;
    this.streamService.send(result.query);
  }

  ngOnInit() {
    this.stream = this.streamService.listen()
      .subscribe(tweet => {
        const tweets = this.tweets.slice(0, this.tweetsPerPage);
        tweets.unshift(JSON.parse(tweet));
        this.tweets = tweets;
      });
  }

  ngOnDestroy() {
    this.stream.unsubscribe();
  }
}
