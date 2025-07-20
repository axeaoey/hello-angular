import { Component } from '@angular/core';
import { TextComponent } from '../text/text.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TextComponent, ReactiveFormsModule, DatePipe, ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  now = new Date()
  number = 1500.5

    formUser = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()
  })

    onSubmit() {
    console.log(this.formUser.value)
  }


  page = "main page"
  title = true;
  multiply = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


  onClickButton() {
    this.page = "Change to another page";
    this.title = false;
  }
}


