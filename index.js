// code your solution here
function superbowlWin(record){
    // const record =[
    //     {year:"2015", result: "W"},
    //     {year:"2014", result:"N/A"},
    //     {year:"2013", result:"L"},
    // ]
    const result = record.find(record=> record.result ==="W")
    return !! result ? result.year : undefined
    

}

// superbowlWin = (record) => {
//     const result = record.find( record => record.result === "W" );
//     return !!result ? result.year : undefined;
//   }