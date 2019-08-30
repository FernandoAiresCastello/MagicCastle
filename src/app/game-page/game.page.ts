import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageLog } from '../ui-elements/message-log';
import { Message } from '../ui-elements/message';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-game',
  templateUrl: 'game.page.html',
  styleUrls: ['game.page.scss'],
})
export class GamePage implements OnInit {

  @ViewChild(IonContent, null) content: IonContent;

  title: string;
  messageLog: MessageLog = new MessageLog();
  command: string;

  constructor() {
  }

  ngOnInit() {
    this.title = 'Welcome!';
    this.messageLog.add(new Message('incoming', 'This is a test...\nDo you like the test?'));
  }

  sendCommand() {
    this.command = this.command.trim().toLowerCase();
    if (this.command) {
      this.messageLog.add(new Message('outgoing', this.command));
      this.command = '';
    }
  }
}
