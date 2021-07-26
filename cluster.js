const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster) {
    console.log(`마스터 프로세스 아이디: ${process.pid}`);
    //cpu개수만큼 워커를 생산
    for(let i=0;i<numCPUs; i+=1) {
        cluster.fork();
    }
    //워커가 종료되었을 때
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
        console.log('code', code,'signal', signal);
    });
} else {
    //워커들이 포트에서 대기
    http.createServer((req,res) => {
        res.writeHead(200, {'Contest-Type': 'text/html; charset=utf-8'});
        res.write('<h1>hello node!</h1>');
        res.end('<p>hello cluster</p>');
    }).listen(8086);

    console.log(` ${process.pid}번 워커 실행`);
}