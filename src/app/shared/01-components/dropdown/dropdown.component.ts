import {Component, Input, OnInit} from '@angular/core';
import {DropdownModel} from "./dropdown.model";

@Component({
  selector: 'shared-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit{

  @Input('dropdown') dropdownModel!: DropdownModel;
  dropdownDemo: DropdownModel = {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    items: [
      {
        url: "#",
        label: "Demo 1"
      },
      {
        url: "#",
        label: "Demo 2"
      },
      {
        url: "#",
        label: "Demo 3"
      },
      {
        url: "#",
        label: "Demo 4"
      },
    ]
  };

  ngOnInit(): void {
    this.dropdownModel= this.dropdownDemo;
  }

  isOpen: boolean = false;
  openDropdown(){
    this.isOpen=!this.isOpen;
  }
}
