## 해야할 일

[x] 기본 셋팅
[x] 메인 위키 페이지
[x] 페이지 네이션 (in 메인 위키 페이지)
[ ] 위키 내용 페이지
[ ] 위키 페이지 추가 모달 만들기
[ ] 위키 내용 페이지 수정
[ ] 위키 본문에 다른 위키 제목이 있다면 링크 걸어서 이동 시키기

## 타임 라인 (걸린 시간 / 예상 시간)

0. 기본 셋팅

   1. yarn berry 사용 (2h / 1h)

   - 프론트 yarn berry
   - 백엔드 pnpm

1. 백엔드 작업

   1. 간단한 백앤드 서버 구축 (2h / 2h)

   - .env 설정
   - cors 설정
   - CRUD API 구현

   1. db 구조 설계 (2h / 2h)

   - 파일 시스템으로 db 구축
   - 간단한 테스팅

2. 프론트 작업

   1. 메인 페이지 ( 4h / 4h )

      - 마크업
      - css
      - js 로직

   2. 세부 페이지 ( ? / 2h )

      - 마크업
      - css
      - js 로직

   3. 위키 페이지 추가 모달 ( ? / 2h )

      - 마크업
      - css
      - js 로직

   4. 컨텐츠에 하이퍼링크 걸기 (? / ?? )

3. 공통 작업 페이지 네이션
   - 프론트에서 받아서 페이지 네이션 하기로 결정
   - ~~백엔드 api 변경~~
   - ~~프론트 페이지 네이션 구현~~

## 시도한 것

1. 아토믹 디자인
2. 간단한 nest 서버 구축
3. yarn berry 사용

## 사용 스택

React, Nest, TypeScript, Styled-components, 패키지 매니저 프론트 yarn berry, 백엔드 pnpm

## 고민한 내용

- db 관련
- 간단한 웹 페이지니 파일 시스템으로 db를 구축함.

- 페이지 네이션 관련
  - 페이지 네이션 프론트가 할까 백엔드가 할까
  - 데이터가 별로 없으니까 프론트에서 다 받고 페이지 네이션하자
  - 항상 일정한 갯수의 페이지 네이션이 나오도록 함.

## 실행 방법

git clone 후

cd ./be
pnpm install

be/.dev.env 에
CLIENT_URL=http://localhost:5173
pnpm run start:dev

cd ../fe
yarn install

fe/.env 에
VITE_API_URL=http://localhost:3000
yarn run dev
