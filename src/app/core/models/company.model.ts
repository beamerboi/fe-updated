export class companyModel {
    id !: number;
    companyName !: string;
    email !: string;
    website !: string;
    phoneNum !: string;
    faxNum !: string;
    state !: string;
    city !: string;
    street !: string;


    constructor(id: number, companyName: string, email: string, website: string, phoneNum: string, faxNum: string, state: string, city: string, street: string) {
        this.id = id;
        this.companyName = companyName;
        this.email = email;
        this.website = website;
        this.phoneNum = phoneNum;
        this.faxNum = faxNum;
        this.state = state;
        this.city = city;
        this.street = street;
    }
}
