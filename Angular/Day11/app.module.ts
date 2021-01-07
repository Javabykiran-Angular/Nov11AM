import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import { EmployeeComponent } from './employee.component';
import { CourseComponent } from './course/course.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PopertyBindingComponent } from './poperty-binding/poperty-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventBindingPart2Component } from './event-binding-part2/event-binding-part2.component';
import { FormsModule } from '@angular/forms';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ParentComponent } from './parent/parent.component';
import { InbuildPipeComponent } from './inbuild-pipe/inbuild-pipe.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { SummaryPipe } from './summary.pipe';
import { Task2Component } from './task2/task2.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent,
    CourseComponent,
    StringInterpolationComponent,
    PopertyBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    EventBindingPart2Component,
    IfdirectiveComponent,
    FordirectiveComponent,
    SwitchdirectiveComponent,
    Child1Component,
    Child2Component,
    ParentComponent,
    InbuildPipeComponent,
    CustompipeComponent,
    SummaryPipe,
    Task2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
