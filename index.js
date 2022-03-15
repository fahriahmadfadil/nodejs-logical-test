const values = ['11','12','cii','001','2','1998','7','89','iia','fii'];

const isLetter = (str) => {
  return str.match(/[a-z]/i);
}

const getOutput = (arr) => {
  let result = {};
  let allData = [];
  arr.forEach((str) => {
    if(isLetter(str)){
        let temp = [];
        for (let i = 0; i < str.length; i++) {
            for (let j = i + 1; j < str.length + 1; j++) {
                let subStr = str.slice(i, j);
                if(i == 1 && j == 2){
                    continue;
                }
                temp.push(subStr);
            }
            result[str] = temp;
            
        }
        allData = allData.concat(allData,temp); // merge array into allData
        allData = [...new Set(allData)]; // get unique value on allData
    }
  });
  result['S'] = allData;
  return result;
}

// try to run the function
console.log(getOutput(values));