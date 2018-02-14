import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class StreamService {
  private readonly socketUrl: string = 'ws://localhost:8999';
  socket: any;
  observer: Observer<any>;

  listen(): Observable<any> {
    this.socket = new WebSocket(this.socketUrl);

    this.socket.onmessage = (event) => {
      this.observer.next(event.data);
    };

    return this.createObservable();
  }

  send(message: string): void {
    this.socket.send(message);
  }

  createObservable(): Observable<number> {
    return new Observable(observer => {
      this.observer = observer;
    });
  }
}
