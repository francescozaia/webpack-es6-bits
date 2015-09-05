let login = (username, password) => {
    if (username !== "admin" || password !== "root") {
        console.log("login not correct");
    } else {
        console.log("yo")
    }
}

export {
    login
}