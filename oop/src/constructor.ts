class A {
  variable!: string;
  constructor(variable: string) {
    //special type of method ,there is no return type
    this.variable = variable;
  }

  print() {
    console.log('🚀 ~ file: constructor.ts:11 ~ A ~ variable:', this.variable);
  }
}

const a = new A('constructor');
a.print();
