const http = require("http");
const server=http.createHttpServer("/",(req,res)=>{
console.log(req.url)
})



server.listen(3000,"localhost",()=>{
console.log("server is listening on port")})
