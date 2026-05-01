type UserType = {
    username: string,
    password: string,
}
// type UserType = {
//     role: "admin" | "user";
// }

class UserOne implements UserType {
    username: string = "ayan-koley";
    password: string = "password";
}


interface UserInterface {
    username: string;
    password?: string;  // password is optional
}
interface UserInterface {
    email: string;
}

class UserTwo implements UserInterface {
    username: string = "ayan-koley";
    email: string = "koleyayan07@gmail.com"
}

// type is better for union, intersection 

// intersection & sign
type Admin = UserInterface & { role: "admin" | "user" }
class UserThree implements Admin {
    username: string = "ayan-koley";
    password: string = "password";
    email: string = "koleyayan07@gmail.com";
    role: "admin" | "user" = "admin"
}
