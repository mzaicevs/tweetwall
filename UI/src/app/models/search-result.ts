import {Tweet} from './tweet';

export interface SearchResult {
  tweets: Tweet[];
  query: string;
}
