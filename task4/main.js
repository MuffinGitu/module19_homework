function VT() {
    this.name = "VT"
    this.powerOn = false;

}

VT.prototype.turnOn = function () {
    if (!this.powerOn) {
        console.log(`${this.name} turn on`);
        this.powerOn = true;
    }
    else {
        console.log(`${this.name} already tyrn on`)
    }
}

VT.prototype.turnOff = function () {
    if (this.powerOn) {
        console.log(`${this.name} turn off`);
        this.powerOn = false;
    } else {
        console.log(`${this.name}is already turn on`);
    }
}


function TV() {
    this.name = "TV";
    this.powerOn = false;
}


const myVT = new VT();

const myTV = new TV();

Object.setPrototypeOf(myTV, myVT);

myTV.turnOn();