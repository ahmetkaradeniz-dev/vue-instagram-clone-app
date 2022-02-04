import { collection, getDocs, getFirestore } from "firebase/firestore";
  
class UserService {
    constructor() {
        this.collectionName = "users";
    }
    
    getAll(){
        return getDocs(collection(getFirestore(),this.collectionName))
    }
}

export default new UserService();