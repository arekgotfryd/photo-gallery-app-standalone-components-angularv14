import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeedbackAndChatComponent } from './feedback-and-chat/feedback-and-chat.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterModule, FeedbackAndChatComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'photo-gallery-app';
}
