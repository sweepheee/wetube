# WeTube

Cloning Youtube with Vanilla and NodeJS

npm install @babel/node 바벨설치
npm install @babel/preset-env env단계
npm install @babel/core 코어설치

npm install nodemon -D 서버를 껐다키지않고 리프레쉬
여기서 -D는 package.json에서 dependencies에 추가되지 않고
devDependencies에 추가되는데 이건 개발자가 필요한것을 말함.

npm install morgan 어디에접속하는지, rest어떤 방식인지 등등 알려줌 ex)"tiny", "combined", "dev", "common"

npm install helmet 보안
npm install body-parser 미들웨어관련. 파라미터값이 넘어갔는지 확인(console.log(req.body))가능
npm install cookie-parser 미들웨어관련
npm install pug 노드JS view에서 HTML보여주기

mongodb 설치. 설치 후 패스 설정->vscode rerun -> 터미널 mongod -> mongo 완료.
npm install mongoose (설치할때 워닝이 많이뜨는데 무시)
npm install dotenv db파일에 있는 db주소가 들어나는데 그걸 감춰준다.

async -> 자바스크립트는 어떤 작업을 하면서 동시에 다른 작업도 수행하고 있다. 즉 기다려주지않는다. async를 사용하면 이 작업은 반드시 기다려야 해! 하는 명령이다.

npm install multer 동영상업로드할때 필요한 미들웨어

mongdb 명령어
mongo로 연결.
use we-tube -> 스키마 연결
show collections -> 어떤 테이블있는지 확인
db.테이블이름.remove({}) -> 안에 컬럼 다 삭제
db.테이블이름.find({}) ->db 컬럼 확인.

페이지가 연결될때까지
비디오라우터 -> (주소입력(펑션이될수도있음), 열려질페이지와연결(비디오컨트롤러에 정해준 변수))
여기서 주소입력은 routes.js에서 관리. 펑션일경우 애로우펑션->이프를 통해 선택지를 줄 수 있다.
비디오컨트롤러에선 디비와 연결을 해줄 수 있다. 렌더에서 반드시 디비에서 전해오는 값을 pug(view)에 변수로 넘겨줘야한다.

const videos = await Video.find({}).sort({ \_id : -1 });
순서 바꾸기. 최근 순서로 올려줌.

npm install eslint -g https://academy.nomadcoders.co/courses/435438/lectures/6849420 이강의보고 설치
npm install eslint-config-prettier -> eslint 코드스타일 무시하기

prettier -> settings -> format검색 -> format on save 체크 시 발동


npm install webpack webpack-cli   -> 웹팩 설치.

package.json 가서 scripts부분 아래처럼 수정. 

  "scripts": {
    "dev:server": "nodemon --exec babel-node init.js --delay 2",
    "dev:assets": "webpack"
  },

  webpack.config.js 생성.


npm install extract-text-webpack-plugin@next    -> @next 버전

npm install css-loader postcss-loader sass-loader   -> 그대로 쳐도 가능


npm install autoprefixer    -> 브라우저 호환을 알아서 해준다.(코드를 알아서 호환되게해줌)

npm install node-sass    -> sass

npm install cross-env     -> 배치파일을 찾을수없다? 비슷한 에러 나면 설치하고
scripts dev:assets 맨앞에 "cross-env ~~~~" 붙여줌 

npm install babel-loader

npm install @babel/polyfill    -> 브라우저에서 지원하지않는 js지원하게해줌. ex)async


npm install passport-local-mongoose    -> 소셜로그인기능주는 js
npm i passport passport-local    ->사이트 자체 로그인 기능 js

npm install express-session