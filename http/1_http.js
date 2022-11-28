const http = require('http');
/*
import === requier(ES Modules)
export === module.exports (CommonJS)

react는 최신 문법 ESM Script를 지원
ESM과 CJS는 공존이 불가능

nodeJS를 통째로 CJS(기본) -> ESM로 바꾸는 사실상 불가능
바뀔게 너무 많음

실제로 node의 대안들(최신의 런타임 환경들은 ex) deno...)
ESM을 사용하고 있습니다. 그러나 이를 위해서 아예 처음부터 다시 설계

방법은 존재 package.json에 type = "module"을 추가하면됨
그러나 기존 라이브러리와의 호환성이 굉장이 좋지않음

호환성문제로 ESM보다 CJS를 사용함
*/


// 서버를 만듬
const server = http.createServer((req,res)=>{
    console.log(req);

    res.end(
        `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
        <h2>HTTP 모듈 테스트 </h2>
        <p>처음으로 실행하는 node,js http 서버</p>
</body>
</html>
        `
    )
})

server.listen(3001, ()=> {
    console.log('3000번 포트실행중');
})