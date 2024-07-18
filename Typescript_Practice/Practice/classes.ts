class User{
    email:string
    name:string

    private readonly city:string='Gandhinagar'

    constructor(email:string,name:string){
        this.email=email;
        this.name=name
    }

    // Alterbate way
    // constructor(public email:string,public name:string)

}

const Adarsh=new User('adarsh@gmail.com','adarsh')

// Adarsh.city