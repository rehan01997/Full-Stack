var John = {
    name : "john",
    age : 18
};
var Jane = {
    name : "jane",
    age : 24
};

console.log(John.age);

Jane.age++;

John.address = {
    'first line' : "abc/def",
    city : "New Delhi" 
};

console.log(John.address.city);

John.spouse = Jane;
Jane.spouse = John;

Jane.email = ["jane1@gmail.com" , "jane2@gmail.com"];

Jane.email.push("jane3@gmail.com");
console.log(John);

John.CelebrateBirthday = function () {
    John.age++;
}
Jane.CelebrateBirthday = function () {
    John.age++;
}

John.CelebrateBirthday();
console.log(John);


