// normal interface
interface Chai {
    type: string,
    price: number,
    milk?: boolean
}

const c: Chai = {
    type: "Masala",
    price: 12
}


// How to use interfaces in functions
interface DiscountCalculator {
    (price: number): number
}
const apply50: DiscountCalculator = (p) => p * 0.5;

// start, stop example
interface ChaiMachine {
    start():void,
    stop():void
}
const machine: ChaiMachine = {
    start() {
        console.log("Machine is started");
    },
    stop() {
        console.log("Mahicne is stopped")
    }
}
// index signature
interface IndexSignature {
    [flavoid: string]: number
}
const signature: IndexSignature = {
    "masala": 34,
    "ginger": 12
}
// extends interfaces
interface A {
    showA(): void
}
interface B {
    showB(): void
}
interface C extends A, B {
    showC(): void
}



// Generic Templates
// T - not a fixed type of data
function WrapInArray<T>(item: T): T[] {
    return [item]
}
WrapInArray("something");
WrapInArray(12);

function Pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}

interface Box<T> {
    content: T
}
const container: Box<string> = { content: "it's a box" };

interface ApiResponse<T> {
    status: number,
    response: T
}
const ApiCall: ApiResponse<{ name: string, age: number }> = { 
    status: 200,
    response: {
        name: "something",
        age: 23
    }
}