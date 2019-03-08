import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus = false;
  
  constructor(private socket: Socket) { 
    this.checkStatus();
  }

  checkStatus() {
    console.log('checkStatus');
    this.socket.on('connect', () => {
      console.log('Conectado');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado');
      this.socketStatus = false;
    });
  }

  getPosition(){
    console.log('getPosition')
    this.socket.on('position', function(data) {
      console.log('position: ', data);
    });
    console.log('dkjskjdsb')

  }
}
