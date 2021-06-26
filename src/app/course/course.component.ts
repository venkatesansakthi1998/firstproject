import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 course=[
   {'id':1,'name':'Learn Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'/assest/angular image.jpg'},
   {'id':2,'name':'Learn Nodejs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assest/nodejs.jpg'},
   {'id':3,'name':'Learn Vuejs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assest/vuejs.jpg'},
   {'id':4,'name':'Learn reactjs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assest/reactjs.jpg'},

 ]
}
