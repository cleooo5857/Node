// 임포트
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const user = require('./routes/user')

const app = express();
app.set('port',3000);

app.use(
    morgan('dev'), express.json(), express.urlencoded({extended: false})
)
app.use('/', express.static(path.join(__dirname,'public')))

// 서비스 
// - router

// - user
// 백엔드 유저가 post로 맞쳐놨기떄문에
// app.post('/user/login')
// app.post('/user/sign')
// app.post('/user/logout')

// todo
// app.get('/todo');
// app.post('/todo');
// app.put('/todo/:todoId');

// 실베 서비스 로직을 app.js에 구현시 가독성이 떨어지며 유지보수가 힘들다.
// 따라서 express의 router를 통해 경로를 연결해주어 서비스를 구현 할 수 있다.

app.use("/user", user)

app.listen(app.get("port"), ()=> {
    console.log(`${app.get('port')}번으로 서버 실행중`);
})