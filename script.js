const isLogin = (user) => {
    if(user) return true;

    return false
}

const isRegister = (user) => {
    if(user.isRegister) {
        return true
    }

    return false
}

function testCode = () {
    return true;
}
