// how compiler reduct board type into a specific type based on condition on your code.
// using typeof
function getChai(kind: string | number) {
    if(typeof kind === 'string') {
        return `Making ${kind} chai`;
    }
    return `Chai order ${kind}`
}
// truthy value
function serverChai(msg?: string) {
    if(msg) {
        return `Serving ${msg}`;
    }
    return `Searving default Masala chai`;
} 

// union
function orderChai(size: "small" | "medium" | "large" | number) {
    if(size === 'small') {
        return `Small cutting chai...`;
    }
    if(size === 'medium' || size === 'large') {
        return `Make extra chai`;
    }
    return `Chai order #${size}`;
} 

// using instanceof keyword
class KulhadChai {
    serveKulhad() {
        return `Serving kulhad chai`;
    }
}
class GlassChai {
    serveGlass() {
        return `Serving Glass chai`;
    }
}
function serve(chai: KulhadChai | GlassChai) {
    if(chai instanceof KulhadChai) {
        return chai.serveKulhad();
    }
    return chai.serveGlass();
}

// using type keyword
type ChaiOrder = {
    type: string,
    price: number
}
function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.price === 'number'
    )
}

function serveOrder(item: ChaiOrder | string) {
    if(isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.price}`;
    }
    return `Serving cutom chai ${item}`;
}

type GingerChai = { type: "Ginger", gingerAmount: number };
type ElachiChai = { type: "Elachi", elachiAmount: number };
type MasalaChai = { type: "Masala", spiceLevel: number };

type Chai = GingerChai | ElachiChai | MasalaChai;

function MakeChai(order: Chai) {
    switch(order.type) {
        case "Masala":
            return `Masala chai with ${order.spiceLevel} spicelevel.`;
        case "Elachi":
            return `Elachi chai with ${order.elachiAmount} elachi.` 
        case "Ginger":
            return `Gigner chai with ${order.gingerAmount} ginger.`
    }
}

// by in keyword
function brew(order: MasalaChai | ElachiChai) {
    if("spiceLevel" in order) {
        return `Masala chai.`
    }
    return `Elachi chai`;
}

// unknown keyword
function isStringArray(arr: unknown): arr is string[] {}