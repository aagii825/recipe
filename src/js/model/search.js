require("@babel/polyfill")
import axios from "axios";
// гадна ашиглах ганцхан зүйлийг эксполт хийхэд defualt хэрэглэнэ
export default class search{
    constructor(query) {
        this.query = query;
    }
    async doSearch() {
        try {
            let result = await axios("https://forkify-api.herokuapp.com/api/search?q=" + this.query);
            this.result = result.data.recipes;
            return this.result;
        }catch(error) {
            alert("Асуудал гарлаа :" + error);
        }
    }
}