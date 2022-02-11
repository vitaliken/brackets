module.exports = function check(str, bracketsConfig) {

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (stack.length === 0) {
      stack.push(str[i]);
    } else {
      for (let z = 0; z < bracketsConfig.length; z++) {
        if (stack.includes(str[i]) && bracketsConfig[z][0] === bracketsConfig[z][1] && bracketsConfig[z][0] === str[i]) {
          let counter = 0;
          for (let y = stack.length; y > 0; y--) {

            if (bracketsConfig[z].indexOf(stack[y - 1]) === 0) {
              while (counter >= 0) {
                stack.pop();
                counter--;
              }
            } else {
              counter++;
            }
          }
        } else if (bracketsConfig[z].indexOf(str[i]) >= 0) {
          if (bracketsConfig[z].indexOf(str[i]) === 0) {
            stack.push(str[i]);
          } else if (bracketsConfig[z].indexOf(str[i]) === 1) {
            let counter = 0;
            for (let y = stack.length; y > 0; y--) {
              if (bracketsConfig[z].indexOf(stack[y - 1]) === 0) {
                while (counter >= 0) {
                  stack.pop();
                  counter--;
                }
              } else if (counter === -1) {
                break;
              } else {
                counter++;
              }
            }
          }
        }
      }
    }
  }
  return stack.length === 0 ? true : false;
}
