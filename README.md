# 2.2 - 동아리 서버 (club-server)

![last commit Badge](https://img.shields.io/github/last-commit/inu-appcenter/club-server)
![commit Badge](https://img.shields.io/github/commit-activity/y/inu-appcenter/club-server)
[![GitHub stars](https://img.shields.io/github/stars/inu-appcenter/club-server?style=shield)](https://github.com/inu-appcenter/club-server/stargazers)

> 이 저장소는 기존 동아리 서버를 리뉴얼한 저장소이며 새롭게 MVC 패턴으로 개발된 express 애플리케이션을 리팩토링한 저장소입니다. <br>
>
> > #### **리팩토링 이유**
> >
> > MVC 패턴은 보편적인 디자인 패턴 중에 하나이기는 하지만, 컨트롤러가 모델을 통제하다보니 의존성이 증가하며 점점 스파게티 코드가 만들어졌습니다. 또한 JavaScript가 type-safe하지 않기 때문에 TypeScript를 도입하기로 했습니다.

[1 - 이전 동아리 서버](https://github.com/inu-appcenter/inuclub) `Archived` <br>
[2.1 - 리뉴얼한 express 서버](https://github.com/inu-appcenter/InuClub-server-renewal) `Archived` <br>

## 개요

인천대학교 학생들에게 동아리 홍보와 가입, 소모임을 위한 서비스입니다. <br>

#### 기능

- 동아리 회장들을 위한 동아리와 클럽투데이(우리가 어떤 동아리냐면..) 관리
- 사용자들의 소모임 모집과 참여

## 사용 기술

- `JavaScript`, `TypeScript`
- `Node.js`, `Nest.js`, `Typeorm`
- `Windows Server 2012`
- `Mysql`
- `Swagger`

## 프로젝트 구조

(DDD는 전문가와 함께..) `clean-architecture` 를 참고했습니다.

```
src
├── common
│   ├── code
│   ├── entity
│   ├── exception
│   ├── swagger
│   ├── type
│   ├── usecase
│   └── utils
│       ├── class-validator
│       ├── dayjs
│       └── format
├── domain
│   ├── entity
│   │   └── types
│   ├── port
│   │   ├── admin
│   │   ├── applicationInfo
│   │   ├── category
│   │   ├── club
│   │   ├── clubtoday
│   │   ├── gathering
│   │   └── user
│   ├── repository
│   └── usecase
│       ├── admin
│       ├── applicationInfo
│       ├── category
│       ├── club
│       ├── clubtoday
│       ├── comment
│       ├── gathering
│       └── user
└── infrastructure
    ├── api
    │   ├── custom-swagger
    │   ├── exception-filter
    │   ├── middlewares
    │   └── rest
    ├── config
    │   ├── environment
    │   ├── multer
    │   └── typeorm
    ├── di
    │   ├── injections
    │   └── providers
    └── repositories
        ├── converters
        └── entities
```

#### 의존성 원칙

- **공통사항(common)**

  모든 계층에서 참조할 수 있는 공통사항 담당

- **도메인(domain)**

  핵심 영역으로 비지니스 규칙 구현 및 캡슐화 담당

- **인프라스트럭처(infrastructure)**

  애플리케이션을 구성하는 기술적 세부 구현 담당

> 도메인 계층의 클래스에서는 인프라스트럭처 계층의 클래스를 직접 참조할 수 없고, 반대로 인프라스트럭처 계층의 클래스에서는 도메인 계층의 클래스를 직접 참조할 수 있습니다.

## DataBase

<img width="500" src="./docs/inu_club.png"></img>

## API

`RESTful API` 방법론을 따랐습니다.

[API 문서 보러가기 (준비중)]()

#### 업데이트 로그

|       날짜       |                    내용                     |                  작성자                   |
| :--------------: | :-----------------------------------------: | :---------------------------------------: |
| **[2021-03-08]** |               Swagger 자동화                | [bbaktaeho](https://github.com/bbaktaeho) |
| **[2021-03-09]** | 관리자 API와 빼먹은 API 추가, DTO 모델 추가 | [bbaktaeho](https://github.com/bbaktaeho) |
| **[2021-03-11]** |   Parameter, Query, Body 예제 데이터 추가   | [bbaktaeho](https://github.com/bbaktaeho) |
| **[2021-03-12]** |        URL 수정, 오타 수정, DTO 수정        | [bbaktaeho](https://github.com/bbaktaeho) |
| **[2021-03-21]** |         전체적으로 많은 변경 사항..         | [bbaktaeho](https://github.com/bbaktaeho) |
| **[2021-04-16]** |               관리자 API 수정               | [bbaktaeho](https://github.com/bbaktaeho) |

## 더 알고싶다면?

[👉 안드로이드](https://github.com/inu-appcenter/club-android) <br>
[👉 위키]()
