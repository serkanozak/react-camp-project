import axios from "axios";

export default class ProductService {
    getProducts() {
        return axios.get("https://jsonplaceholder.typicode.com/users");
    }

    getById(id) {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }
}


// "https://jsonplaceholder.typicode.com/users"

// `https://jsonplaceholder.typicode.com/posts/${postId}`



// export default class ProductService {
//     getProducts() {
//         return axios.get("http://localhost:3030/api/products");
//     }

//     getById(id) {
//         return axios.get(`http://localhost:3030/api/products/${id}`);
//     }
// }