
/*
    *set up server
 */

const http=require("http");
const app=require('./app');
const config=require('./api/config')
const PORT=process.env.PORT||3000

const server=http.createServer(app.callback());

server.listen(PORT,'192.168.1.145',()=>{
    console.log(`server is listening on port ${PORT}`)
});