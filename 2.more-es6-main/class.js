class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

const aamir = new Support('Aamir Khan', 'BD');
const salman = new Support('Solaiman Khan', 'Dubai');
const sharuk = new Support('SRK Khan', 'Dubai');
const akshay = new Support('Akshay Kumar', 'Dubai');
aamir.startSession();
salman.startSession();
// console.log(aamir, salman, sharuk, akshay);
// console.log(salman


// my practice .........
class madrasahSudent {
    stdName;
    class = '8';
    village = 'sholdhan';
    constructor(stdName, village) {
        this.stdName = stdName;
        this.village = village;
    }
    applyNow() {
        console.log(this.stdName,'today apply complite')
    }
}

const ashraf =new madrasahSudent('ashraful' , 'mohishashi');
ashraf.applyNow();
const Amzad =new madrasahSudent('Amzad khan' , 'kalampur');
Amzad.applyNow();
const Lotfar =new madrasahSudent('Lotfar ahammed' , 'Koshura');
Lotfar.applyNow();
console.log(ashraf , Lotfar, Amzad);