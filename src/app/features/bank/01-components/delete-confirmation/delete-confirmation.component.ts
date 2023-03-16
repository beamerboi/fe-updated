import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CompanyService} from "../../00-services/company.service";

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent {

  // @Input() companyId !: number;

  @Output() showModal = new EventEmitter<{modal: boolean}>();

  callToggleModal() {
    this.showModal.emit({modal: false});
  }



    deleteCompany() {
      let companyId = 1;
      this.company.deleteCompany(companyId).subscribe(
          data => console.log('Company deleted successfully'),
          error => console.error('Error deleting company', error)
      );
  }
  constructor(private company: CompanyService) {
  }
}
