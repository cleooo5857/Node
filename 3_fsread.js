const fs = require('fs');

const fsPromise = fs.promises;

fs.readFile("./text1.txt",  "utf-8", (err,data)=>{
    if(data){
        console.log(data);
    }else{
        console.log(err);
    }
});

try{
    let text = fs.readFile("./text2.txt", "utf-8",)
    console.log(text);
}catch(err){
    console.log(err);
} finally {
    console.log('성공 실패 여부 상관없이 반드시 실행');
}

fsPromise.readFile("./text3.txt",  "utf-8",)
    .then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err);
    });
