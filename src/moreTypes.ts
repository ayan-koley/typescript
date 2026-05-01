// Type assertion 
// to assign type force fully you need to use 'as' keyword that tells ts to belive me 

let username: any = "ayan-koley";
let usernamelength: number = (username as string).length;

type User = {
    email: string,
    password: string
}

let userString: string = `{"email": "koleyayan7@gmail.com", "password": "password" }`;
let userObject = JSON.parse(userString) as User;
console.log(userObject);

// html element 
const inputElement = document.getElementById("document") as HTMLInputElement;


// any and unknown keyword
let value: any;
value = "bmw"
value = ['m3', 'm4', 'm5'];
value.toUpperCase();    // doen't throw error

let newValue: unknown;
newValue = "bmw";
newValue = ['m3', 'm4', 'm5'];
if(typeof newValue === 'string') {
    newValue.toUpperCase();
}

type Role = "admin" | "user";

function redirectBasedOnRole(role: Role): void {
    if(role === 'admin') {
        console.log(`Recirect to the admin role`);
        return;
    }
    if(role === 'user') {
        console.log(`Redirect to the User role`);
        return;
    }
    role;
}

function neveReturn(): never {
    while(true) {}
}