// int main(){
//     int firstNum = 6;
//     int secondNum = 15;
//     int sum;
//     sum = add(firstNum,secondNum);
//     printf("sum= ",sum);
//     return 0;
// }

class Sum {
  firstNum!: number;
  secondNum!: number;
  constructor(first: number, second: number) {
    (this.firstNum = first), (this.secondNum = second);
  }
  addNumbers() {
    const sum = this.firstNum + this.secondNum;
    return sum;
  }
  result() {
    console.log('Sum: ', this.addNumbers());
  }
}

const addNumbers = new Sum(10, 20);
addNumbers.result();
