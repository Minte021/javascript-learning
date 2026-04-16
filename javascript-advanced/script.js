const person = {
    fname : "Mintensot",
    lname : "Alemayehu",
    age : 21,
    myFunction : function() {
        return this.fname + " " + this.lname;
    }
};

console.log(person.myFunction());