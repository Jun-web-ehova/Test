const array = [2, 4, 7, 5, 4, 3, 8];
let answer = [];
let a = 0;

const result = array.filter(function (item, index) {
                      a = 0;
                      answer.push(item);
                      answer.filter(function (int, num) {
                        if (item == int && index != num) {
                            a = 1;
                        }
                      });
                     
                      return a == 0;
                    });

console.log(result);


const leapyear = (year) => {
  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log("うるう年です");
  } else {
    console.log("うるう年ではありません");
  }
};

const year = prompt("年数を入力してください");
leapyear(year);