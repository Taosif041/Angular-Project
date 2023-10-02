import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup; // Initialize form as an empty FormGroup
  quotes: any[] = [];

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.form = this.fb.group({
      quoteCount: [5, [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  onSubmit() {
    const quoteCount = this.form?.get('quoteCount')?.value;
    if (quoteCount !== undefined && quoteCount !== null) {
      this.apiService.getQuotes(quoteCount).subscribe(data => {
        this.quotes = data;
      });
    }
  }
}
