"use strict";
// interface Product {
//   name: string;
//   price: number;
//   quantity: number;
// }
// class BaseStoreService {
//   private products: Map<
//     string,
//     { name: string; price: number; quantity: number }
//   > = new Map();
//   private productList: Product[] = [];
//   private cart: Map<string, number> = new Map(); // Product ID to Quantity
class BaseStoreService {
    // Constructor to initialize properties
    constructor() {
        this.products = {}; // Initialize products as an empty object
        this.productList = []; // Initialize productList as an empty array
        this.cart = {}; // Initialize cart as an empty object
    }
    // Add a product to the store
    addProduct(id, name, price, quantity) {
        const product = { name, price, quantity };
        this.products[id] = product; // Add to products object
        this.productList.push(product); // Add to productList array
    }
    // Get product by ID
    getProduct(id) {
        console.log('🚀 ~ BaseStoreService ~ getProduct ~ id:', id);
        return this.products[id]; // Retrieve from products object
    }
    // Get all products in the store
    getProductList() {
        return this.productList;
    }
}
let store = new BaseStoreService();
store.addProduct('1', 'Happy Birthday Card', 5, 100);
store.addProduct('2', 'Christmas Card', 10, 50);
store.addProduct('3', 'Thank You Card', 15, 30);
// Get product details by ID
console.log('🚀 ~ store:', store.getProduct('2'));
// Get all products in the store
console.log('🚀 ~ store.getProductList:', store.getProductList());
console.log('🚀 ~ store:products products', store.products);
