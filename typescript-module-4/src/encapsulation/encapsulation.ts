/*
    https://java.howtocode.dev/5/5.3
    আমরা এতোক্ষনে জেনে ফেলেছি যে, একটি অবজেক্ট হলো কতগুলো ডাটা এবং মেথড এর সমষ্টি। অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং এর আরেকটি খুবই গুরুত্বপূর্ণ বিষয় আছে, 
    যা হচ্ছে, একটি ক্লাসের মধ্যে ডাটা গুলোকে লুকিয়ে রাখা এবং শুধুমাত্র মেথডের মাধ্যমে সেগুলোকে একসেস করতে দেওয়া। এর নাম হচ্ছে এনক্যাপসুলেশান(Encapsulation) । 

*/

class BankAccount {
  // Private variable, accessible only within this class
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // Getter method to access balance
  public getBalance(): number {
    return this.balance;
  }

  // Setter method to update balance with validation
  public setBalance(amount: number): void {
    if (amount >= 0) {
      this.balance = amount;
    } else {
      console.log('Invalid amount, balance cannot be negative.');
    }
  }
}

// Usage
const account = new BankAccount(1000);
console.log(account.getBalance()); // Output: 1000

account.setBalance(1500); // Sets new balance
console.log(account.getBalance()); // Output: 1500

account.setBalance(-500); // Tries to set a negative balance
// Output: Invalid amount, balance cannot be negative.
