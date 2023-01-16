import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  // AIzaSyCy3Cj9bnrcOQlHAWo3YF_4wzLGag6uQZ8

  zoom = 15;
  center!: google.maps.LatLngLiteral;
  markers: any;
  options: google.maps.MapOptions = {
    scrollwheel: false,
    mapTypeControl: false,
    streetViewControl: false,
  };

  emailSent: boolean = false;

  markerOptions!: google.maps.MarkerOptions;
  markerPosition!: google.maps.LatLngLiteral;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Contact Us - Aurora Beauty');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.center = {
      lat: 53.86527143576552,
      lng: -2.3945739053711863,
    };

    this.markerOptions = {
      draggable: false,
      label: {
        color: 'black',
        text: 'Aurora Beauty',
      },
    };

    this.markerPosition = {
      lat: 53.86527143576552,
      lng: -2.3945739053711863,
    };
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_2ypqe5q',
        'template_yqrgur2',
        e.target as HTMLFormElement,
        'stusP_Nq081JUaNOy'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this.emailSent = true;
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  }
}
