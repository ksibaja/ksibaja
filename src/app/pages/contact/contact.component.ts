import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  loading: boolean = false;

  sendEmail(e: Event) {
    //let timerInterval: any;
    Swal.fire({
      customClass: {},
      width: '100px',
      didOpen: () => {
       Swal.showLoading();
     },
   });

    e.preventDefault();
    //this.loading = true;
    emailjs
      .sendForm(environment.SERVICE_ID, environment.TEMPLATE_ID, e.target as HTMLFormElement, {
        publicKey: environment.PUBLIC_KEY,
      })
      .then(
        () => {
          //this.loading = false;

          Swal.close();
          console.log('SUCCESS!');
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
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
