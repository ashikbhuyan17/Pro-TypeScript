const searchName = (value: string | null) => {
  if (value === null) {
    console.log('There is nothing to search');
  } else {
    console.log('Searching...');
  }
};

searchName(null);

// kmh^-1 --> ms^-1

const getMyCarSpeed = (speed: unknown) => {
  console.log(
    '🚀 ~ file: nullable-unknown-never.ts:14 ~ getMyCarSpeed ~ speed:',
    typeof speed
  );
  if (typeof speed === 'number') {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(`My speed is : number ${convertedSpeed}`);
  }
  if (typeof speed === 'string') {
    const [value, unit] = speed.split(' '); // ['10' ,'kmh^-1']

    const convertedSpeed = (parseFloat(value) * 1000) / 3600;
    console.log(`My speed is :string ${convertedSpeed}`);
  } else {
    console.log('There is wrong type');
  }
};

getMyCarSpeed(10);
getMyCarSpeed('10 kmh^-1'); // 10 kmh-1
getMyCarSpeed(true);

// never টাইপ সেই ফাংশনের জন্য, যা কখনো কিছু রিটার্ন করে না (যেমন: Error থ্রো করে বা ইনফিনিট লুপে থাকে)।

function throwError(message: string): never {
  throw new Error(message);
}

throwError('Bhai bhai error hyeche , kandi dimu');
