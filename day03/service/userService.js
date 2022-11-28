const UserService = {
    login(req,res){
    console.log(req.body);
    if(req.body.email === "test@test.com" && req.body.password === 'test'){
        res.status(200).json({
            message:true,
            data:"회원가입에 성공"
        })
    }
    }
}

module.exports = UserService;