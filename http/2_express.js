const express = require('express');

const app = express();
app.set('port',3000); // 변수 처럼 사용

app.get("/", (req,res) =>{
    console.log(req)
    res.send(
        res.send('Hello Express')

    )
})

// app.listn(포트번호, 콜백함수)
app.listen(app.get('port'), ()=>{
    console.log(`${app.get('port')}번으로 서버 실행중`);
})
