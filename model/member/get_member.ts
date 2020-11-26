export class getMember {
    firstName:string
    lastName:string
    id:number
    email:string
    constructor(data: any) {
        this.email = data.email;
        this.id = data.id;
        this.lastName = data.lastName;
        this.firstName = data.firstName;
    }
}