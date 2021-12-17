import axios from "axios";

export default class BookService {
    static async getAll(){
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=5')
            return response.data
        } catch (e){
            console.log(e)
        }

    }
}