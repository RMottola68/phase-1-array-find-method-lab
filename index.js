



function superbowlWin (array) {
    let winFinder = (array) => {
        return (array.result === "W")
    }

    const winner = array.find(winFinder);

    if(winner) {
        return winner.year
    } 
}

console.log(superbowlWin(record))
