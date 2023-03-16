import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/Services/security.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cards = [
    { title: 'EASY CREDIT ', description: ' Get a credit so easily, completely automatically and free of charge in accordance with the law: we take care of everything! ', image: '' },
    { title: '', description: '', image: '' },
    { title: '', description: '', image: '' },
    { title: 'A MORE GENEROUS CARD', description: 'With the My Ideal Account card, my payment limit is increased to €5,000 over 30 rolling days. I also have access to extended insurance, Travel insurance for me and my tribe ', image: '' },
    
  ];

  servicecards = [
    { title: 'EN LIGNE CREDIT ', description: 'Real estate, car, works or a simple purchase to be financed, we offer you many credit solutions to meet your needs. Take advantage of a complete range to carry out all your projects.', image: '/assets/img/Cashback.svg' },
    { title: 'CREDIT CARD', description: 'Parfaite pour le week-end à l étranger,les paiements sont gratuits partout dans le monde Dématérialisez votre carte avec le paiement mobile', image: '/assets/img/Debit-card.svg' },
    { title: 'CHEQUE BOOK', description: 'Its free to order a cheque book for an eligible CommBank account.If you have account with cheque access that offers cheque book, you can order one ', image: '/assets/img/cheque.svg' },
    { title: 'BANK ACCOUNT', description: 'account insurance is a provident product that allows you, in the event of accidental death, to pass on capital to your loved ones .', image: '/assets/img/Bank-account.svg' }
  ];

  constructor( public securityService:SecurityService, private router: Router ){}

  public async ngOnInit() {
  
  }
  async login(){
    await this.securityService.kcService.login({
      redirectUri : window.location.origin + '/user'
    })
  
    
  }
}
