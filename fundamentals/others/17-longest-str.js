function longestInString(string) {
    var words = string.split(" ");
    var maxLength = words.reduce((acc, cur) => {
        if (acc.length > cur.length) return acc.length;
        return cur.length;
    }, 0);
  
    return maxLength;
  }
  console.log(longestInString("Toi ten la phung huynh nhi lam nghe developer"))
  