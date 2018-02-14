import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Tweet } from '../models/tweet';

@Component({
  selector: 'app-live-wall',
  templateUrl: './live-wall.component.html',
  styleUrls: ['./live-wall.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveWallComponent {
  @Input() tweets: Tweet;
}
