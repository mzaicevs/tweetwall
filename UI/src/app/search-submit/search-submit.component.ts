import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {TweetService} from '../tweet.service';
import {SearchResult} from '../models/search-result';

@Component({
  selector: 'app-search-submit',
  templateUrl: './search-submit.component.html',
  styleUrls: ['./search-submit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchSubmitComponent {
  @Input() query: string;
  @Output() searchResults = new EventEmitter<SearchResult>();

  constructor(private tweetService: TweetService) { }

  onClick(): void {
    this.tweetService.getData(this.query)
      .subscribe(response => {
        if (response && response.statuses) {
          this.searchResults.emit({
            tweets: response.statuses,
            query: response.search_metadata.query
          });
        }
      });
  }
}
