## 해야할 일

[x] 기본 셋팅
[ ] 메인 위키 페이지
[ ] 위키 내용 페이지
[ ] 페이지 네이션 (in 메인 위키 페이지)
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

   1. 메인 페이지 ( ? / 3h )

      - 마크업
      - css
      - js 로직

   2. 세부 페이지

      - 마크업
      - css
      - js 로직

   3. 위키 페이지 추가 모달 ( ? / 2h )

      - 마크업
      - css
      - js 로직

   4. 컨텐츠에 하이퍼링크 걸기 (? / ?? )

3. 공통 작업 페이지 네이션
   - 백엔드 api 변경
   - 프론트 페이지 네이션 구현

## 시도한 것

1. 아토믹 디자인
2. 간단한 nest 서버 구축
3. yarn berry 사용

## 사용 스택

React, Nest, TypeScript, Styled-components, 패키지 매니저 프론트 yarn berry, 백엔드 pnpm

## 고민한 내용

- 간단한 웹 페이지니 파일 시스템으로 db를 구축함.

## 환경변수

fe/.env  
VITE_API_URL = 'http://localhost:3000'

be/.dev.env

CLIENT_URL="http://localhost:5173";
