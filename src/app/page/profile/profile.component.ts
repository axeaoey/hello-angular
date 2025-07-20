import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink , ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {


    formUser = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()
  })

    onSubmit() {
    console.log(this.formUser.value)
  }

}
