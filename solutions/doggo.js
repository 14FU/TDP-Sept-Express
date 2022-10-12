// create function 
const doggoCompetition = (place) => {
    const places = []; // create array

    for (let i = 1; i <= 100; i++) {
        if (i === place) continue; // skips to next iteration

        let placeString = ""  + i; //this way you can chnage number to string 

        if (i % 10 === 1 && i !== 11) placeString += "st";
        else if(i % 10 == 2 && i !== 12) placeString += "nd";
        else if(i % 10 == 3 && i !== 13) placeString += "rd";
        else placeString += "th";

        places.push(placeString); 
    }

    return places;
}

module.exports = doggoCompetition;

// line 10 += 'add to' so ADD st TO placestring (the number)
// saying all ending 1 shoudl be 'st' on the end.
// line 10 != but if it is 11 then DONT (!)
//The strict equality operator ( === ) checks whether its two operands are equal, returning a Boolean result.
//line 15 add things to the end (push) dont need to count the index 