import { Component } from '@angular/core';
import { Message } from '../../model/message'; // Adjust the path as needed
import { SharedModule } from '../../utils/shared.component'; // Uncomment and provide the correct path if SharedModule is needed elsewhere
import { ApiService } from '../../services/api.service';

@Component({
  // imports: [SharedModule], // Removed as 'imports' is not valid in @Component
  imports: [SharedModule],
  templateUrl: './cricket.component.html',
  styleUrl: './cricket.component.css'
})
export class CricketComponent {
    inputPrompt ="";
    messageArray: Message[]=[];
    loadingChat=false;

    constructor(private apiResponse: ApiService){

    }
    askButtonClicked(){
      // alert("Ask only cricket Related Questions!")
      if (this.inputPrompt.trim()==''){
      return
    }

    this.messageArray.push(new Message(this.inputPrompt,true))
    this.loadingChat=true

    this.apiResponse.getCricketResponse(this.inputPrompt)
    .subscribe({next:(respone)=>{
      console.log(respone)
      this.messageArray.push(new Message(respone.content,false))
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
