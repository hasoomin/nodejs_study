const http = require('http');

http.createServer((req,res) => {
    res.writeHead(500, {'Content-Type' : 'test/html ; charset = utf-8'});
    res.write('<h1>hello node!</h1>');
    res.end('<p>hello server</p>');
})
 .listen(8080, () => { //서버 연결
console.log('8080번 포트에서 서버 대기 중입니다.');
});