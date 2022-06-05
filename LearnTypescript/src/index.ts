/*
let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
*/

/*
function render(document: string){
    console.log(document);
}
*/

/*
let numbers: number[] = [];
numbers.forEach(n => n.valueOf)
*/

/*
let user: [number, string] = [1, 'Mosh'];
user.push(1); 
*/

//Enum
//const small = 1;
//const medium = 2;
//const large = 3;
 /*
const enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);
*/

//Function
/*
function calculateTax(income: number, taxYear = 2022): number{
    if (taxYear < 2022)
        return income * 1.2;
    return income *1.3;
}
calculateTax(10_000);
*/

///Object
/*
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}
let employee: Employee = {
    id: 1,
    name: '',
    retire: (date: Date) => {
        console.log(date);
    }
};
employee.name = 'Mosh';
*/

//Union type
/*
function kgToLbs(weight: number | string): number {
    //Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}

kgToLbs(10);
kgToLbs('10kg');
*/

// Intersection type
/*
type Draggable = {
    drag: () => void
};
type Resizeable = {
    resize: () => void
};

type UIWidget = Draggable & Resizeable; 

let textbox: UIWidget = {
    drag: () => { },
    resize: () => {}
}
*/

//Literial (exact)
/*
type Quantity = 50 | 100
type Metric = 'cm' | 'inch';
let quantity: Quantity = 100;
*/

//Nullable type
/*
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');  
}


greet(null); 
greet('hello');
greet(undefined);
*/

//Optional chaining

type Customer = {
    birthday?: Date
}
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
//optional property access operator
console.log(customer?.birthday?.getFullYear());

//Optional element access operator
//
//customers?.[0]

//optional call
let log: any = null;
log?.('a');
