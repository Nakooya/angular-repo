import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() dataFromParent: string = '';
  @Output() dataToParent = new EventEmitter<string>();

  sendDataToParent(){
    this.dataToParent.emit('Data from child')
  }
}
