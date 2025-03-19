import { Component, HostListener } from '@angular/core';
import Swal from 'sweetalert2'
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../environments/environment.development';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-contact',
  imports: [FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  loading: boolean = false;

  ngAfterViewInit(): void {
    this.adjustContentHeight();
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.adjustContentHeight();
  }

  private adjustContentHeight(): void {
    const header = document.getElementById('header') as HTMLElement;
    const main = document.getElementById('main-container') as HTMLElement;
    const headerHeight = header ? header.offsetHeight : 0;
    main.style.minHeight = `calc(100dvh - ${headerHeight}px)`;
  }

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
