class User {
    id: number;
    username: string;

    constructor(id: number, username: string) {
        this.id = id;
        this.username = username;
    }
}

new User(123, "ayan-koley")

// access modifiers
class Userdetails {
    public username: string = "ayan-koley";
    private password: string = "123";
    protected email: string = "koleyayan07@gmail.com";

    revelPassword() {
        return this.password;
    }
}
class Subuser extends Userdetails {
    revelEmail() {
        return this.email;
    }
}
new Subuser()


// getter and setter
class ModernChai {
    private _sugar: number = 3;

    get sugar() {
        return this._sugar;
    }

    set sugar(value: number) {
        if(value > 5) throw new Error("Too sweet");
        this._sugar = value;
    }
}

class Ekchai {
    static shopName = "mess";

    constructor(public flavor: string){}
}
Ekchai.shopName;

abstract class MakeChai {
    abstract make(): void;
}

class Chai extends MakeChai {
    make() {
        console.log('abstract clas call');
    }
}