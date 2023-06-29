const findTheOldest = function(people) {
    let oldest;
    people.map(people => {
        if (!people['yearOfDeath'])
        {
            return people['yearOfDeath'] = new Date().getFullYear();
        }
    });
    people.sort((a, b) => {
        if ((a['yearOfDeath'] - a['yearOfBirth']) < (b['yearOfDeath'] - b['yearOfBirth'])) 
        {
            return 1;
        }
        else {
            return -1;
        }
    });
    oldest = people[0];
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;