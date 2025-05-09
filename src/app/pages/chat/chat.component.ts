import { Component } from '@angular/core';
import { SharedModule } from '../../utils/shared.component';
import { ApiService } from '../../services/api.service';
import {CommonModule } from '@angular/common';
import { error } from 'console';
import { Message } from '../../model/message';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  inputPrompt ="";
  messageArray: Message[]=[];
  loadingChat=false;

  constructor(private apiResponse: ApiService){
  }
  askButtonClicked(){

    if (this.inputPrompt.trim()==''){
      return
    }

    this.messageArray.push(new Message(this.inputPrompt,true))
    this.loadingChat=true

    this.apiResponse.getRandomResponse(this.inputPrompt)
    .subscribe({next:(respone)=>{
      console.log(respone)
      this.messageArray.push(new Message(respone,false))
      this.inputPrompt=''
      this.loadingChat=false
    },
    error:(error)=>{
      console.log(error)
      this.loadingChat=false
    },
  })
  
  }
}
