const usernames: string[] = ["ayan-koley", "arpitaPaul16", "sayan-koley"];
const ratings: Array<number> = [4.6, 5.0, 5.0];

type User = {
    email: string,
    password: string
}

const Users: Array<User> = [{email: "koleyayan07@gmail.com", password: "123"}];

const cities: readonly string[] = ["kolkata", "mumbai"];

// Enum
enum Order {
    PENDING,
    DELIVER,
    CANCLE
}
const orderStatus = Order.PENDING;

enum Constant {
    DB_URI="https://mongodb.com",
    PORT=9090
}
const values = Constant.DB_URI;