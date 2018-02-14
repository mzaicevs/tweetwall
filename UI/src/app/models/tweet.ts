import {TwitterUser} from './twitter-user';

export interface Tweet {
  text: string;
  user: TwitterUser[];
}
