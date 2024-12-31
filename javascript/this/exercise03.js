/*
    1. Create the following Object and assign it to a variable
       named "book":
       {
        name: "Harry Potter",
        author: "J.K. Rowling",
        characters: {
            mainChars: ["Harry", "Ron", "Hermione"],
            list: function() {
                for (const char of this.mainChars) {
                    console.log(char)
                }
            }
        }
       }

    2. Call the list function on the book and explain the behaviour

    3. How would you make the "list" method temporarily (for one
       function call) log out this array instead:
       ["Draco", "Severus", "Voldemort"] ?

    HINT* What methods can we use on Functions to manipulate "this"?
*/

const book = {
  name: "Harry Potter",
  author: "J.K. Rowling",
  characters: {
    mainChars: ["Harry", "Ron", "Hermione"],
    list: function () {
      console.log(this);
      // for (const char of this.mainChars) {
      //   console.log(char);
      // }
    },
  },
};
// call book1
// book.characters.list();

const book2 = {
  //   mainChars: ["Draco", "Severus", "Voldemort"],
  characters: {
    mainChars: ["Draco", "Severus", "Voldemort"],
    name: "new object nhi test",
  },
};

// call book2 with bind
// const funcBind = book.characters.list.bind(book2.characters);
// funcBind();

// call book2 with call
book.characters.list.call(book2.characters);

// call book2 with apply
// book.characters.list.apply(book2.characters);
