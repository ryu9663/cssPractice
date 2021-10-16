const http = require('http');

http.createServer((request, response) => {
 
    const {method, url} = request
    console.log('뭔가 요청이 들어온게 맞나?? 맞네!!')

    let body = [];
    request.on('error', (err) => {
      console.error(err);
    }).on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
    console.log(body)
    if(method === 'OPTIONS'){
        response.writeHead(200,defaultCorseHeader)
        response.end()
    }


    if(method === 'POST' && url === '/upper'){
        //대문자변환
        
        response.end(body.toUpperCase())
    }
    else if(method === 'POST' && url === '/lower'){
        //소문자변환
        response.end(body.toLowerCase())
    }
    else{
    response.end('It is not what i wanted')
    }
    console.log(method, url)
});
}).listen(8080);

const defaultCorsHeader = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Access-Control-Max-Age': 10
  };