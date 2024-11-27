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

//   // Add a product to the store
//   addProduct(id: string, name: string, price: number, quantity: number): void {
//     this.products.set(id, { name, price, quantity });
//     this.productList.push({ name, price, quantity });
//   }
//   getProduct(
//     id: string
//   ): { name: string; price: number; quantity: number } | undefined {
//     console.log('🚀 ~ BaseStoreService ~ getProduct ~ id:', id);
//     return this.products.get(id);
//   }
//   // Get all products in the store
//   getProductList(): Product[] {
//     return this.productList;
//   }
// }

// let store = new BaseStoreService();
// store.addProduct('1', 'Happy Birthday Card', 5, 100);
// store.addProduct('2', 'Happy Birthday Card', 10, 100);
// store.addProduct('3', 'Happy Birthday Card', 15, 100);
// console.log('🚀 ~ store:', store.getProduct('2'));
// // Get all products in the store
// console.log('🚀 ~ store.getProductList:', store.getProductList());

interface Product {
  name: string;
  price: number;
  quantity: number;
}

class BaseStoreService {
  public products: { [id: string]: Product }; // Use an object instead of Map
  private productList: Product[];
  private cart: { [id: string]: number }; // Cart using an object

  // Constructor to initialize properties
  constructor() {
    this.products = {}; // Initialize products as an empty object
    this.productList = []; // Initialize productList as an empty array
    this.cart = {}; // Initialize cart as an empty object
  }

  // Add a product to the store
  addProduct(id: string, name: string, price: number, quantity: number): void {
    const product: Product = { name, price, quantity };
    this.products[id] = product; // Add to products object
    this.productList.push(product); // Add to productList array
  }

  // Get product by ID
  getProduct(
    id: string
  ): { name: string; price: number; quantity: number } | undefined {
    console.log('🚀 ~ BaseStoreService ~ getProduct ~ id:', id);
    return this.products[id]; // Retrieve from products object
  }

  // Get all products in the store
  getProductList(): Product[] {
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
