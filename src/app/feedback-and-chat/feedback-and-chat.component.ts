import { Component, inject, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback-and-chat',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feedback-and-chat.component.html',
  styleUrls: ['./feedback-and-chat.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeedbackAndChatComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  contactForm = this.formBuilder.group({
    fullname: '',
    email: '',
    comments: '',
  });

  showMsg: boolean = false;

  onSubmit(): void {
    console.log('Your feedback has been submitted', this.contactForm.value);
    this.showMsg = true;
    this.contactForm.reset();
  }

  ngOnInit(): void {
      // Load the chat script, which activates the `<df-messenger>` element.
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger-cx/bootstrap.js?v=1';
      document.head.appendChild(script);
  }
}