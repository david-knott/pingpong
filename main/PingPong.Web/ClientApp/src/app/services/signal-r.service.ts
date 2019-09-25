import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";

@Injectable()
export class SignalRService {
  public data: Document[];
  public bradcastedData: Document[];

  private hubConnection: signalR.HubConnection

  public startConnection = () => {
    
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/chart')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public broadcastGametData = (data) => {
    this.hubConnection.invoke('broadcastchartdata', data)
      .catch(err => console.error(err));
  }

  public addBroadcastChartDataListener = () => {
    this.hubConnection.on('broadcastchartdata', (data) => {
      console.log(data);
    })
  }


}
