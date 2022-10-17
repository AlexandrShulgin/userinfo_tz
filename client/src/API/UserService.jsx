import axios from "axios"
export default class UserService {
    static async getAll(query) {
        const response = await axios.get("http://127.0.0.1:3000", {params: {term: query} })
        return response 
    }
}