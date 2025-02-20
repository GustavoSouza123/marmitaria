import { Component } from '@angular/core';
import { DropdownDirective } from '../shared/dropdown.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, DropdownDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  // @Output() featureSelected = new EventEmitter<string>();
  //
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }
}
