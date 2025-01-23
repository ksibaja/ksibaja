import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  sendEmail() {
    Swal.fire({
      title: "Good job!",
      text: "Email sent successfully!",
      icon: "success"
    });

    try {
      const myForm: any = document.getElementById("myForm");
      myForm.reset();
    } catch (error) {
      console.error("Error: ", error);
    }

    return false;
  }
}
