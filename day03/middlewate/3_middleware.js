const express = require('express');
const app = express();
// morgan
/*
    Log를 찍어주는 미들웨어는
    다양한 모드를 지원
    ex) dev, combined, common, short, tiny
    보통 개발용으로는 dev를 사용하고
    배포용으로는 combined를 사용

    npm i morgan

*/

const morgan = require('morgan');
app.use(morgan('dev'));

// body-parser
// req message로 전달받은 body의 데이터를 해석
// express 4.16.0 이상부터는 기본 내장

app.use(express.json()); // json 데이터를 읽는 것을 허용
app.use(express.urlencoded({extended:false}))
// url에 있는 정보 (param, query-string) express 내부에 있는 해석툴로 해석을 할 것인지
// false면 내장된 것을 사용
// true면 추가로 라이브러릴 설치해서 내가 원하는 라이브러리로 해석
// qs라는 모듈을 내장하고 있으나 다른 라이브러리를 사용하여 url에 담긴 데이터를 해석 할 수 도있음
 

//static
// express에 내장, 정적인 파일(리소스,html,css,js,img,mp4)을 서버에 제공


const path = require('path');
// ()안에 있는 경로 문자열 나타냄 기본값 root 폴더

// 퍼블릭 폴더안 파일을 웹페이지 url로 보여줌
app.use('/', express.static(path.join(__dirname,'public')))
// URL 'http://localhost:3000/'로 접속 시 public 폴더로 접근이 가능
// 백엔드 루트주소 === "/"
  
app.get('/',(req,res)=> {
    res.send('Hello express');
})

//서버 실행
app.listen(3000,()=>{
    console.log('3000번으로 서버 실행');
})