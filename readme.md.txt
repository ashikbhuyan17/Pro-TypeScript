step1: Interface
step2: Schema
step3: Model
step4: Database query on model

<!-- mongoose hocce mongodb er wrapper 
insert and insertmany shudhu mongodb te kaj korbe bt mongoose e kaj korbe na  , baki sob mongodb method mongoose e support korbe 
 -->
<!-- 
pattern MVC , 
Modular => (user) => user.interface.ts, user.model.ts, user.route.ts, user.controller.ts,service => user module user folder er modhe tkbe jeta readable onk sojok and file gula o onk fast kuje pawa jai
Interface => interface.ts 
 Schema, Model => model.ts
 route function => controller.ts
 database logic or database query function => service.ts
 -->

 <!-- 
 instance method : instance er method 
 //kono ekta class theke jody instance create kory and ey  instance sathe jody 
ekta method attarched thake setay hocce  instance method.
 class -> instance + method -> instance method 
 

 const user = new User (payload ) // user -> class user -> instance
 user.save()  => that is method that is instance method and jehetu eta mongoose dce tay eta built in  instance methods
 >


 <!-- 
 export const createUser = async (payload:IUser):Promise<IUser> =>{   //jehetu async tay eta promise return korbe and  promise ta IUser type er 
   const user = new User (payload )
   await user.save()
   return user
 }
  -->