import { Component } from '@angular/core';

@Component({
  selector: 'app-chatpanel',
  templateUrl: './chatpanel.component.html',
  styleUrls: ['./chatpanel.component.css']
})
export class ChatpanelComponent {
  messages: string[] = []; // Array to store chat messages
  newMessage: string = ''; // Variable to store the new message from the input field

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push(this.newMessage);
      this.newMessage = ''; // Clear the input field after sending the message
    }
  }
}


