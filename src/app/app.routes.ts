import { Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { CricketComponent } from './pages/cricket/cricket.component';
import { ImageComponent } from './pages/image/image.component';



export const routes: Routes = [
    {
        path:'',
        redirectTo:'chat',
        pathMatch:'full'
    },
    {
        path:"chat",
        component: ChatComponent

    },
    {
        path:"cricket",
        component: CricketComponent

    },
    {
        path:"image",
        component: ImageComponent

    },
];
