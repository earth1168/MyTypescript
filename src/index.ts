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
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: '',
    retire: (date: Date) => {
        console.log(date);
    }
};
employee.name = 'Mosh';