import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocketEndPoint: string = 'http://localhost:8080/ws';
  stompClient: any;
  constructor() { }
  _connect() {
    console.log("Initialize WebSocket Connection");
    let socket = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(socket);
    return this.stompClient;
  };
  errorCallBack(error) {
    console.log("errorCallBack -> " + error)
    setTimeout(() => {
      this._connect();
    }, 5000);
  }
}
