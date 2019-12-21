import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageLog } from '../ui-elements/message-log';
import { Message } from '../ui-elements/message';
import { IonContent } from '@ionic/angular';
import { GameEngine } from './game-engine';

@Component({
  selector: 'app-game',
  templateUrl: 'game.page.html',
  styleUrls: ['game.page.scss'],
})
export class GamePage implements OnInit {

  private static readonly RESPONSE_DELAY = 1000;

  @ViewChild(IonContent, null) content: IonContent;

  title: string;
  command: string;
  blockInput = false;
  messageLog = new MessageLog();
  engine = new GameEngine();

  constructor() {
  }

  ngOnInit() {
    this.title = 'Magic Castle';
    this.messageLog.add(new Message('incoming', this.engine.firstMessage));
  }

  sendCommand() {
    this.command = this.command.trim();

    if (this.command) {
      this.blockInput = true;
      this.engine.interpretCommand(this.command.toLowerCase());
      this.messageLog.add(new Message('outgoing', this.command));
      this.command = '';

      setTimeout(() => {
        this.printResponse();
        this.blockInput = false;
      }, GamePage.RESPONSE_DELAY);
    }
  }

  private printResponse() {
    this.messageLog.add(this.engine.getMessage());
  }
}
