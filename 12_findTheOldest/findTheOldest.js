const findTheOldest = function(people) {
    
    let oldestPerson;
    let oldestPersonAge = 0;
    
    for (const person of people) {
        let age = 0;
        const date = new Date();
        if (person.yearOfDeath === undefined) {
            age = date.getFullYear() - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        if (age > oldestPersonAge) {
            oldestPerson = person;
            oldestPersonAge = age;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
