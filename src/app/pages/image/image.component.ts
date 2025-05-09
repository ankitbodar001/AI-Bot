import { Component } from '@angular/core';
import { Message } from '../../model/message'; // Adjust the path as needed
import { SharedModule } from '../../utils/shared.component';
import { ApiService } from '../../services/api.service'; // Adjust the path as needed

@Component({
  selector: 'app-image',
  imports: [SharedModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
  inputPrompt = "";
  messageArray: string[] = [];
  loadingChat = false;

  constructor(private apiResponse: ApiService) {

  }
  askButtonClicked() {
    if (this.inputPrompt.trim() == '') {
      return
    }
    if (this.messageArray.length!=0){
      this.messageArray=[]
    }
    this.loadingChat = true

    this.apiResponse.getImageResponse(this.inputPrompt)
      .subscribe({
        next: (respone) => {
          this.messageArray.push(...respone)
          console.log(this.messageArray)
          this.inputPrompt = ''
          this.loadingChat = false
        },
        error: (error) => {
          console.log(error)
          this.loadingChat = false
        },
      })
  }

}
