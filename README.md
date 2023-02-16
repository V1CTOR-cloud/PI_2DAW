# Integrated project of team 2 
<p align="center"><img src="https://raw.githubusercontent.com/V1CTOR-cloud/PI_2DAW/main/archivos%20README/logo.jpeg"></p>


<p align="center">Xarxa Dones is an association made up of women who work to achieve the full normalisation of the lives of women with disabilities and real gender equality.
We have created a new application for them, which will allow them to carry out their work more easily and quickly, as well as having numerous accessibility tools. Previously they worked each one on their own and lost a lot of time carrying out tasks and organising information, that is why we have created an application where they can work together in an organised way. </p>
<p align="center">The new application will have a database to store all the information in a systematised way, it will also speed up the work thanks to the shortcuts, and at the same time it has several accessibility tools to facilitate the work. By creating this application, we have enabled them to store everything from member data to activity reports, both old and new, in a safe and convenient place to carry out their work without losing any data.</p>

## Login & sign-up
We have created two views for logging into the application, both for users who already have an account and for those who do not. In the login we will verify the credentials of the old users by comparing the information with the database. For people who do not have a user account, they will have the option to create one, where the data will be collected and stored in the database. 
<p align="center">
  <img src="https://raw.githubusercontent.com/V1CTOR-cloud/PI_2DAW/main/archivos%20README/Sign%20In.png" width=50% ><img src="https://raw.githubusercontent.com/V1CTOR-cloud/PI_2DAW/main/archivos%20README/Sign%20Up.png" width=50% >
</p>

## Dashboard
All users will have a dashboard view in their application. This will have different widgets with direct access where relevant information of each user will be displayed. For example, a list of the activities previously carried out, an updated history with information of each associate, as well as two graphs where the statistics of the activities or employees will be reflected.To display this information on the charts in a simple and effective way, we have used the ApexCharts library.
 <p align="center"><img src="https://raw.githubusercontent.com/V1CTOR-cloud/PI_2DAW/main/archivos%20README/Technician%20DashBoard.png" width=60% ></p>

### Example of a graph

This would be the code:
```js
constructor() {
    this.chartOptions = {
      series: [44, 55, 67, 83],
      chart: {
        height: 350,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px"
            },
            value: {
              fontSize: "16px"
            },
            total: {
              show: true,
              label: "Total",
              formatter: function(w) {
                return "249";
              }
            }
          }
        }
      },
      labels: ["Apples", "Oranges", "Bananas", "Berries"]
    };
  }
```
This is how it would be displayed:
 <p align="center"><img src="https://raw.githubusercontent.com/V1CTOR-cloud/PI_2DAW/main/archivos%20README/Graficos.png" width=50% ></p>

## Calendar
We have created a calendar where employees can write down the dates of activities or create important events. We will be able to see the calendar in monthly view, weekly view or daily view. To create it we have created a new component in Angular:
```bash
ng add angular-calendar
```
In addition to importing the calendar module into our application module:
```js
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
})
```
 <p align="center"><img src="https://raw.githubusercontent.com/V1CTOR-cloud/PI_2DAW/main/archivos%20README/Calendar.png" width=60% ></p>

## File System
The application will have a file uploading system so that employees can upload from photographs of the activity to be carried out to files with data on the associates. To be able to make POST and GET requests we have connected our component with the Base URL of the endpoints:
```js
export const environment = {
  production: false,
  baseUrl: 'http://localhost:8080'
};
```
 <p align="center"><img src="https://raw.githubusercontent.com/V1CTOR-cloud/PI_2DAW/main/archivos%20README/File%20System.jpg" width=60% ></p>

## Download and Installation

##### Installing proyect

Install Angular
```bash
npm install -g @angular/cli
```
Initialise the downloaded project
```bash
ng serve
```


## Frameworks we have used:
<ul>
  <li>Symfony: https://symfony.com/ (version 6.2)</li>
  <li>Angular: https://angular.io/ (version 15.0.1)</li>
</ul>

## Contacts

<p>Joan Coronado Casades
<a href="joancoronado12@gmail.com">joancoronado12@gmail.com</a></p>
<p>Paula Mari Esteve
<a href="paulamariesteve@gmail.com<">paulamariesteve@gmail.com</a></p>
<p>Alejandro Contreras Sanchis
<a href="alejandro.sanchis31@gmail.com">alejandro.sanchis31@gmail.com</a></p>
<p>Candela Berlanga Rosado
<a href="candeloide2016@gmail.com">candeloide2016@gmail.com</a></p>
<p>Víctor Martínez Zapata
<a href="victorbg189@gmail.com">victorbg189@gmail.com</a></p>
