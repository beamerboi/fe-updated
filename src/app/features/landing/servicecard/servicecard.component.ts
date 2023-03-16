import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servicecard',
  templateUrl: './servicecard.component.html',
  styleUrls: ['./servicecard.component.scss']
})
export class ServicecardComponent {
  @Input() title !: string;
  @Input() description !: string;
  @Input() image !: string;

}
