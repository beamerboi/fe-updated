import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {companyModel} from "../../../../core/models/company.model";
import {CompanyService} from "../../00-services/company.service";
import {Router} from "@angular/router";
import { PaginationControlsDirective } from 'ngx-pagination';

@Component({
  selector: 'app-enterprise-main',
  templateUrl: './enterprise-main.component.html',
  styleUrls: ['./enterprise-main.component.scss']
})
export class EnterpriseMainComponent implements OnInit, OnChanges {
  companyOveriewData: companyModel[] = [
    new companyModel(12, "One Tech Business Solutions", "contact@otbs.tn",
        "onetech-bs.com", "71551221", "71551221", "Tunis", "Tunis", "rue des entrepreneurs"),
    new companyModel(12, "One Tech Holding", "contact@oth.tn",
        "onetech-group.com", "71551231", "71551231", "Tunis", "Tunis", "rue des entrepreneurs"),
    new companyModel(12, "Google", "contact@google.tn",
        "google.com/info", "71551121", "71551121", "Tunis", "Tunis", "Lac 2"),
  ];

  @Input() id !: string;
  @Input() maxSize !: number;
  @Output() pageChange !: EventEmitter<number>;
  @Output() pageBoundsCorrection !: EventEmitter<number>;
  showModal = false;
  searchText !: string;

  toggleModal() {
    this.showModal = !this.showModal;
  }

  recieveModal(modalData: { modal: boolean }) {
    this.showModal = modalData.modal
  }

  companyList: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private company: CompanyService, private router: Router,) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.company.getAllCompanies().subscribe((data=> {
      this.companyList = data;
    }))
  }

  ngOnInit(): void {
    this.company.getAllCompanies().subscribe((data=> {
      this.companyList = data;
    }))
  }


  onTableDataChange(event: any){
    this.page = event;
    this.companyList();
  }

  onTableSizeChange(event: any): void{
    this.tableSize = event.target.value;
    this.page = 1
    this.companyList()
  }

}
