// normal object
const User = {
    name: "ayan",
    email: "koleyayan07@gmail.com"
}

let tea: {
    name: string,
    email: string
}
tea = {
    name: "ayan koley",
    email: "koleyayan07@gmail.com"
}

type Item = { name: string, quentity: number };
type Address = { street: string, pin: string, state: string }

type Order = {
    id: number,
    items: Item[],
    address: Address
}

const order: Order = {
    id: 4321,
    items: [{name: "keyboard", quentity: 4}],
    address: {street: "Nitay soroni", pin: "71109", state: "west bengal"}
}

// Partial keyword => make all key into optional
type Chai = {
    type: string,
    price: number,
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
    console.log(updates);
}
updateChai({}); // we can also pass empty object 
updateChai({ price: 20 });
// Require keyword
type OrderDetails = {
    address: Address,
    age?: number
    alternativeNumber?: number
}
const updateOrder = (updates: Required<OrderDetails>) => {
    console.log(updates);
}
updateOrder({address: { street: "Nitay soroni", pin: "71109", state: "west bengal"}, age: 22, alternativeNumber: 4423232323});

// Pick keyword
type User = {
    username: string,
    email: string,
    password: string,
    accessToken: string
}
type ResUserDetails = Pick<User, "username" | "email">;

// Omit keyword
type nonSecrectField = Omit<User, "accessToken">

const userDetails: nonSecrectField = {
    username: "ayan-koley",
    email: "koleyayan07@gmail.com",
    password: "nothing"
}