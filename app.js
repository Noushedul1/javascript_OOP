class Book {
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    details() {
        return `${this.title} ${this.author} ${this.year}`;
    }
    getYears() {
        let years = new Date().getFullYear()-this.year;
        return `age of this book : ${years}`;
    }
}

class megazines extends Book {
    constructor(title,author,year,month){
        super(title,author,year);
        this.month = month;
    }
    getMonth() {
        return `The month is : ${this.month}`;
    }
    static myShops(){
       return 'hello';
    }
    mydetails() {
        return super.details();
    }
    country() {
        return 'Bangladesh';
    }
}
class performance extends megazines {
    goodPer() {
        return 'hello';
    }
    country() {
        return 'Bangladesh';
    }
}

let book2 = new Book();
let book1 = new megazines('development','akib',2020,'november');
console.log(megazines.myShops());
console.log(book1.country());
let book3 = new performance();
console.log(book3.country());
console.log(book3.goodPer());
