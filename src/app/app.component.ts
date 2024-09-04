import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './pages/parent/parent.component';
import { CardComponent } from './pages/card/card.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalculatorService } from './services/calculator.service';
import { MathService } from './services/math.service';
import { Products } from './interface/products.interface';
import { ProductsComponent } from './pages/products/products.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  providers:[MathService],
  imports: [RouterOutlet, ParentComponent, CardComponent, CommonModule, ReactiveFormsModule, ProductsComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  testId = 'main-cta'
  title = 'parent-child';
  data = [{title: 'title1', content: 'hello1', footer: 'footer1'},
    {title: 'title2', content: 'hello2', footer: 'footer2'},
    {title: 'title3', content: 'hello3', footer: 'footer3'}
  ]
  private mathService = inject(MathService);
  private calculatorService = inject(CalculatorService)
  totalCost = this.calculatorService.add(50, 30)
  products:any = this.mathService.getData();

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      postalCode: new FormControl('')
    })
  });


  onSubmit(){
    this.userForm.patchValue({
      name:'Adrian'
    })
    
  }

}
