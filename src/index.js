import c from './c.js';
import css from "./style.sass";

// 這邊的axios會檢查本地端如果沒有檔案就會往node_modules的資料夾去找
import axios from "axios";

axios.get('https://hexschool.github.io/ajaxHomework/data.json')
    .then( (response) => {
        console.log(response);
    })

let a = 1;
let b = 2;
console.log('hello');

console.log(c);