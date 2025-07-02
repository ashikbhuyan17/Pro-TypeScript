b.getCollection("practice").find({},{ "name": 0,  _id:0}).limit(4).sort({age:1}).skip(3)

$in অপারেটর ব্যবহার করে
const usersInCities = await User.find({ "address.city": { $in: ["Reims", "Paris"] } });
মানে: যাদের শহর Reims অথবা Paris, তাদের খুঁজে আনবে।


## both are same 
db.inventory.find( { $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] } )

db.inventory.find({ 
  price: { 
    $ne: 1.99, 
    $exists: true 
  } 
})

{ price: { $exists: true } }
👉 যাদের price ফিল্ড আছে। মানে price ফিল্ড মিসিং থাকা যাবে না, সেটা অবশ্যই থাকতে হবে।



What is dot notation in MongoDB?
Dot notation is a way to access nested fields (fields inside objects or sub-documents) in MongoDB.
db.getCollection("practice").find(
  {"address.country": { $eq: "France" }},
  { name: 1, email: 1, phone: 1, gender: 1, age: 1, favoutiteColor: 1, address: 1 }
)

MongoDB Aggregation : check pdf
https://studio3t.com/knowledge-base/articles/mongodb-aggregation-framework/
MongoDB Aggregation মানে হলো ডেটাকে বিশ্লেষণ করা, ফিল্টার করা, সাজানো, পরিবর্তন করা বা বিভিন্নভাবে প্রসেস করে চূড়ান্ত ফলাফল তৈরি করা। সহজ ভাষায় বললে, যখন তুমি বড় একটা ডেটাসেট থেকে নির্দিষ্ট তথ্য বের করতে চাও — যেমন, কাউন্ট করতে, যোগফল করতে, গড় বের করতে, গ্রুপ করতে — তখন Aggregation ব্যবহার করা হয়।
