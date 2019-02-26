# WeTube

Cloning Youtube with Vanilla and NodeJS

npm install @babel/node   바벨설치
npm install @babel/preset-env  env단계 
npm install @babel/core 코어설치


npm install nodemon -D     서버를 껐다키지않고 리프레쉬
여기서 -D는 package.json에서 dependencies에 추가되지 않고
devDependencies에 추가되는데 이건 개발자가 필요한것을 말함.

npm install morgan 어디에접속하는지, rest어떤 방식인지 등등 알려줌 ex)"tiny", "combined", "dev", "common"

npm install helmet 보안
npm install body-parser 미들웨어관련. 파라미터값이 넘어갔는지 확인(console.log(req.body))가능
npm install cookie-parser 미들웨어관련
npm install pug   노드JS view에서 HTML보여주기


mongodb 설치. 설치 후 패스 설정->vscode rerun -> 터미널 mongod -> mongo 완료.
npm install mongoose (설치할때 워닝이 많이뜨는데 무시)
npm install dotenv      db파일에 있는 db주소가 들어나는데 그걸 감춰준다.