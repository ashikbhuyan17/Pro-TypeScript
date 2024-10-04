### **Question 1:** **What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?**

**Answer:** Particularly when utilizing an Object Data Modeling (ODM) library like Mongoose, building a model with an interface and schema in MongoDB performs various functions and offers various advantages. Those advantages are Structure Definition, Data Validation, Readability and Maintainability, and Integration with ODM Libraries. Utilizing this encourages better data management and development techniques while utilizing MongoDB databases in your application.

### **Question 2:** **Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?**

**Answer:** In MongoDB, the term "field filtering" describes the capability to define which fields should be included or omitted in the documents that a query returns. It enables you to manage the level of detail in the data you obtain from the database, enhancing efficiency and lowering network bandwidth.

With the help of field filtering in MongoDB, you can carefully manage which fields are included or omitted in the documents that are returned, which optimizes the extraction of data and enhances query speed.

### **Question 3:** **What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.**

**Answer:** A model's instance is the target of instance methods, which operate on the model's instance rather than the model as a whole. The term "static methods" refers to methods that execute some operation on the whole Model. However, if you're searching for functionality on a specific database record directly, instance methods are what you'll want to work with. Static methods are still useful in their own set of circumstances.
const productSchema = new mongoose.Schema({
  price: Number;
});

// Custom instance method
productSchema.methods.calculateDiscountedPrice = function(discountPercentage) {
  const discountedPrice = this.price - (this.price * (discountPercentage / 100));
  return discountedPrice;
};
The method is called on a specific instance of the book, as indicated by the this keyword. It enables us to gain access to the instance's attributes (like this.price) and carry out computations or other actions using the data from that particular instance.

### **Question 4:** **How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.**

**Answer:** 

$ne: In cases where the field's value is different from the desired value, $ne chooses the documents. Documents without the field are included in this.

**example:** 

db.inventory.find( { quantity: { $ne: 20 } } )

documents in the inventory collection where quantity is not equal to 20

$gt: When a field's value is more than (i.e. >) the desired value, $gt chooses the documents that have that value.

**example:** 

db.inventory.find( { quantity: { $gt: 20 } } )

documents in the inventory collection where quantity is greater than 20

$lt: When a field's value is less than (or ) a given value, $lt chooses the documents that have that value.

**example:** 

db.inventory.find( { quantity: { $lt: 20 } } )

documents in the inventory collection where quantity is less than 20

$gte: When a field's value is more than or equal to (i.e. >=) a given value, such as value, $gte chooses those documents that meet that criterion.

**example:** 

db.inventory.find( { quantity: { $gte: 20 } } )

documents in the inventory collection where quantity is greater than or equal to 20

$lte: When a field's value is less than or equal to (i.e. =) a certain value, $lte chooses those documents that have that value.

**example:** 

db.inventory.find( { quantity: { $lte: 20 } } )

documents in the inventory collection where quantity is less than or equal to 20


### **Question 5:** **What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?**

$in: The $in operator chooses the documents where a field's value matches any value in the given array.

**example:** 

db.inventory.find( { quantity: { $in: [ 5, 15 ] } } )

documents in the inventory collection where the value of the quantity field is either 5 or 15

$nin: When a field value is not present in the given array or a field is not present, $nin chooses the documents that provide that information.

**example:** 

db.inventory.find( { quantity: { $nin: [ 5, 15 ] } } )

documents from the inventory collection where the quantity does not equal either 5 or 15.

To add further restrictions to the values that are matched or excluded, you may combine "$in" or "$nin" with other operators like "$gt", "$lt", "$gte," and "$lte.”

**example:**

db.inventory.find({ quantity: { $gt: 50, $nin: [100, 150] } })

This search finds every book in the "books" collection with a price higher than 50 but not higher than 100 or 150.