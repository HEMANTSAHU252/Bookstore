 const http = require('http');
const fs = require('fs');
 const port = process.env.PORT || 3000;

 const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html')
    console.log(req.url)

    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('Navbar')
    res.end('<h1> WELCOME! this will help you</h1> <p> hey will you come here !</p>' );
    } 
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> WELCOME! you want to join us </h1> <p> hey I will still like you untill i got  !</p>' );
        } 
        else if(req.url == '/sitebnale'){
            res.statusCode = 200;
            const data = fs.readFileSync('index.html');
            res.end('<h1> WELCOME! you want to join us </h1> <p> hey I will still like you untill i got  !</p>' );
            res.end(data.toString());    
        } 
        else {
            res.statusCode = 404;
            res.end('<h1> NOT FOUND ! Khelega free fire chalo!!!</h1> <p> kiyu bhai tu bhi reject ho gya kya ! kismat hi gandu hain</p>' );
            } 
})

server.listen(port, () => {
    
  console.log(`Server is lintening on port ${port}`)
});




//              os functions for more visit node.js website


//  const os = require('os');

//  console.log(os.freemem())
//  console.log(os.homedir())

//    event emitter listner we take an example of watertank will overflow

// const EventEmitter = require('events'); // we use inbuilt event function here

// class MyEmitter extends EventEmitter {}
// const myEmitter =  new MyEmitter();

// myEmitter.on('waterFull', () => {
//     console.log('please turn off the motor!');
// setTimeout(() => {console.log('please turn off the motor! its a gentle reminder!');
// },3000);
// });
// console.log("The script is running");
// myEmitter.emit('waterFull');
// console.log("The script is still running");


//     