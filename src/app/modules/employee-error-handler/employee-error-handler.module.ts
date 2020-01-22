import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

class EmployeeErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.log(error.error.message);
  }
 
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{provide: ErrorHandler, useClass: EmployeeErrorHandler}]
})
export class EmployeeErrorHandlerModule { }
