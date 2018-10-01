/*
Wrap should format a string, such that there are no characters passed a given number designated character amount per column.

For example:

wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)

Should return

Lorem ipsum dolor
sit eu amet, elit na
magna sem amet nulla
vel purus ac ligula.
*/

//attempt at wrap
// const wrap = (line, maxLen) => {
//   let cutIdx = 0;
//   let sliceEndpoint = maxLen;
//   let resultStr = "";
//
//   while (cutIdx < line.length) {
//     resultStr += line.slice(cutIdx, sliceEndpoint) + "\n";
//     cutIdx += maxLen;
//     sliceEndpoint += maxLen;
//   }
//
//   return resultStr.slice(0, resultStr.length - 1);
// };

function wrap(line, maxLen) {
  if (line.length <= maxLen) {
    return line;
  }

  const indexOfBlank = line.lastIndexOf(" ", maxLen);
  let split;
  let offset;

  if (indexOfBlank > -1) {
    split = indexOfBlank;
    offset = 1;
  } else {
    split = maxLen;
    offset = 0;
  }

  return (
    line.substring(0, split) +
    "\n" +
    wrap(line.substring(split + offset), maxLen)
  );
}

module.exports = wrap;
