// console.log(globalThis)

// consider this inside different funtion, function constructor, class,

// this in different context will have different value => use bind, apply, call to control this value and behavior in other context

// arrow function: this will inherit this in where to create that arrow function

const test = {
    name: 'nhi',
    greeting: {
        sayGreeting: () => {
            console.log(this.name)
        }
    },
    sayGreeting: function () {
        console.log(this.name)
    }
}

test.greeting.sayGreeting()
test.sayGreeting()