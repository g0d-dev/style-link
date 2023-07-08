# <a href="https://example.com" style="font-size: 35px">StyleLink</a>

스타일 링크는 착장 정보 공유 커뮤니티 플랫폼 서비스 입니다.<br/>

- 개발기간 : 2023.04.28 ~ 2023.07.04<br/>
- 배포주소 : 프론트 배포예정
- 화면설계서 : <a href='https://www.figma.com/file/2lDuKwgoDlFNdZZlgxEnPn/Style-Link_%ED%99%94%EB%A9%B4-%EC%A0%95%EC%9D%98%EC%84%9C?type=design&node-id=0%3A1&mode=design&t=gwXP5rciM8izWT49-1'>화면설계서 바로가기</a>

<br/>
<br/>

## <span style="font-weight:bold;">개발팀 소개</span> 👨‍👧‍👦

<br/>

|                              최영웅                               |                              김용희                               |                                 이승미                                 |
| :---------------------------------------------------------------: | :---------------------------------------------------------------: | :--------------------------------------------------------------------: |
| <img src='https://avatars.githubusercontent.com/u/112806153?v=4'> | <img src='https://avatars.githubusercontent.com/u/113227749?v=4'> | <img src='https://avatars.githubusercontent.com/u/77402599?v=4'></img> |
|       <a href='https://github.com/memolovel'>@memolovel</a>       |       <a href='https://github.com/kyhui1115'>@kyhui1115</a>       |            <a href='https://github.com/mya413'>@mya413</a>             |
|                            프론트엔드                             |                            프론트엔드                             |                               프론트엔드                               |

<br/>
<br/>

## <span style="font-weight:bold;">프로젝트 소개</span> 💡

이 플랫폼을 통해 내가 입은 옷을 공유하고 다른 사람의 착장 정보를 확인할 수 있습니다.<br/>
저희 팀은 인플루언서나 셀러브리티들의 착장 정보를 얻을 수 있는 공간이 한정적인 것에 아이디어를 얻었습니다.<br/>
그 아이디어를 바탕으로 유저들간 정보를 공유할 수 있는 OOTD 커뮤니티 플랫폼을 개발하게 되었습니다.<br/>

<br/>
<br/>

## <span style="font-weight:bold;">시작 가이드</span> 🌟

### <span style="font-weight:bold;">요구사항</span>

- <a href="https://nodejs.org/">Node.js 19.0.1</a>
- <a href="https://www.npmjs.com/">Npm 9.2.0</a>

<br/>

### <span style="font-weight:bold;">설치</span>

```js
$ git clone https://github.com/g0d-dev/style-link.git
$ cd style-link
```

<br/>

### <span style="font-weight:bold;">실행</span>

```js
$ npm install
$ npm run start
```

<br/>
<br/>

## <span style="font-weight:bold;">기술 스택</span> ⚙️

### Environment

<div>
    <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
    <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
    <img src="https://img.shields.io/badge/visual Studio Code-007ACC?style=for-the-badge&logo=visualStudioCode&logoColor=white">
</div>
<br/>

### Config

<div>
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
    <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
    <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">
</div>
<br/>

### Development

<div>
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
    <img src="https://img.shields.io/badge/tailwind css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
    <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">
    <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
</div>
<br/>

### Communication

<div>
    <img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">
    <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">
</div>
<br/>

### Deploy

<div>
    <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
</div>

<br/>
<br/>

## <span style="font-weight:bold;">화면 구성</span> 💻

추후 추가 예정
<br/>
<br/>

## <span style="font-weight:bold;">주요 기능</span> 🔮

### <span style="font-weight:bold;">게시글 조회 기능</span>

- 게시글 전체 조회
- 모달 형식으로 상세정보 조회
- 필터링 기능 구현(최신순, 좋아요순)
  <br />

### <span style="font-weight:bold;">게시글 등록/수정/삭제 기능</span>

- 게시글 등록
  - 게시글 내 컨텐츠 태그 추가
  - 다중 인풋 추가
  - 제품링크 인풋 라우팅
  - 추후 이미지 업로드 개발예정(url 처리)
- 게시글 수정
- 게시글 삭제

### <span style="font-weight:bold;">태그 검색 기능</span>

- 글자 단위로 검색요청
- 디바운싱 기능 구현하여 서버요청 최소화
  <br />
