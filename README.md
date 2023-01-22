# Food Recipe - Backend

## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Run Locally](https://github.com/helmipradita/be-foodrecipe/edit/main/README.md#run-locally)
* [Demo](https://github.com/helmipradita/be-foodrecipe/edit/main/README.md#demo)
  *  [x] [API Reference - Users](#api-reference---users)
  *  [ ] [API Reference - Message](#api-reference---message)
* [Related Project](#related-project)
* [Contact](#contact)

## About The Project

telegram app is a website that is used to send messages to all users in real time. This Telegram app uses socket.io technology which can send and receive messages in real time plus it uses React JS so that without reloading the browser we can get the latest messages from our interlocutors in the application.

## Run Locally

Clone the project

```bash
  git clone https://github.com/helmipradita/be-telegram
```

Go to the project directory

```bash
  cd be-foodrecipe
```

Install dependencies

```bash
  npm install
```

Setup .env copy from .env.example

```bash
  PORT=8000
  HOST=
  PG_CONNECT=

  JWT_KEY=
  REFRESH_TOKEN=

  CLOUD_NAME=
  CLOUDINARY_API_KEY=
  CLOUDINARY_API_SECRET=

  MAIL_USERNAME=
  MAIL_PASSWORD=
  OAUTH_CLIENTID=
  OAUTH_CLIENT_SECRET=
  OAUTH_REFRESH_TOKEN=
```

Start the server

```bash
  npm run dev
```

## Demo

API deploy 

```bash
https://api-telegram.helmipradita.dev
```

## API Reference - Users

<details>
<summary>Show</summary>
<br>

#### Register

```
  POST /users/register
```

Field body form

| Field      | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `name` | `string` | **Required**. name          |
| `email`    | `string` | **Required**. with format email |
| `password` | `string` | **Required**. password          |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "email": "helmitest123@gmail.com"
  },
  "message": "register success please check your email"
}
```

#### Login

```
  POST /users/login
```

Field body form

| Field      | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `email`    | `string` | **Required**. with format email |
| `password` | `string` | **Required**. password          |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "7d31d6e5-acbb-450e-8f81-966b91788b69",
    "username": "Helmi Pradita",
    "email": "helmipraditaa@gmail.com",
    "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1674072858/telegram-app/Group_1233_zwi1oy.png",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkMzFkNmU1LWFjYmItNDUwZS04ZjgxLTk2NmI5MTc4OGI2OSIsInVzZXJuYW1lIjoiSGVsbWkgUHJhZGl0YSIsImVtYWlsIjoiaGVsbWlwcmFkaXRhYUBnbWFpbC5jb20iLCJpYXQiOjE2NzQ0MzA5NTUsImV4cCI6MTY3NDQzNDU1NX0.DZ0MfjPAL_blE1Hd_c6BQy7Y7kDZxLJZ897FztYRNzc",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkMzFkNmU1LWFjYmItNDUwZS04ZjgxLTk2NmI5MTc4OGI2OSIsInVzZXJuYW1lIjoiSGVsbWkgUHJhZGl0YSIsImVtYWlsIjoiaGVsbWlwcmFkaXRhYUBnbWFpbC5jb20iLCJpYXQiOjE2NzQ0MzA5NTUsImV4cCI6MTY3NDUxNzM1NX0.vDJ6FTYxSRV-OyQUG-iperinVnxG1WBdL9BGUFJnAqc"
  },
  "message": "login success"
}
```

#### Edit profile user

```
  PUT /user/profile
```

Field auth

| Field    | Type     | Description                             |
| :------- | :------- | :-------------------------------------- |
| `bearer` | `string` | **Required**. token from response login |

Field body form

| Field      | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `name` | `string` | **Required**. name |
| `email`     | `string` | **Required**. city     |
| `photo`    | `file`   | **Required**. photo    |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "7d31d6e5-acbb-450e-8f81-966b91788b69",
    "email": "helmipraditaa@gmail.com",
    "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1674072858/telegram-app/Group_1233_zwi1oy.png"
  },
  "message": "update data users success"
}
```

#### Get all users

```
  GET /users/all
```

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "c6ccebf5-99dc-4851-b910-4b40075d7739",
      "username": "halo helmi",
      "email": "halo@gmail.com",
      "password": "$2a$10$5xP2gEbwZeJjTKJls8xV3.vhkNwb7Fzbced4hTQwf6bVxgcgvZs4u",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "496f43b2-b462-4279-a340-18cbead5a092",
      "username": "Helmi 1",
      "email": "helmi1@gmail.com",
      "password": "$2a$10$qkIckXl/bwtNR71UJjHBzenCur9ZW9Ui7gq6Jif3SS38fCfM6eu6e",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "d20daaf7-4f7c-427a-b466-939c3c049db6",
      "username": "heihelmi",
      "email": "heihelmi@gmail.com",
      "password": "$2a$10$mP3LlKY3HDuONX7xiwhBt.DA0rG9k4MlpyziqXP6dERDlSaU6MHLi",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "b0230f6f-27d3-4f20-82d5-068ea43da40d",
      "username": "Helmi test",
      "email": "helmitest@gmail.com",
      "password": "$2a$10$sMHDtMGsTpqfWiVyDOICEOIJ12ZUGmty4VlvOYekTmn5HtsAaDvaW",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "85e853bc-b097-4a56-912d-7ee05b6bcf5f",
      "username": "Pradita",
      "email": "pradita@gmail.com",
      "password": "$2a$10$sMnkuN8fmCck6j9ZIybzbuV5zeA2RmX9MOCr7w3UB5Pytql9BauLq",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1674072865/telegram-app/Mask_Group_meywk9.png"
    },
    {
      "id": "79ef4609-6f77-4fd8-9582-12dc011c79f5",
      "username": "Rizky",
      "email": "rizky@gmail.com",
      "password": "$2a$10$u8cdWL4UpFEH0nBxZbb9Ue4JnP9qcRSs3M5ogFncFw2Jd4yfR9tBC",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "ddeb07d9-e6b3-49ee-8341-4d269c180c0b",
      "username": "Rizky baru",
      "email": "rizkybaru@gmail.com",
      "password": "$2a$10$wCbUI1fhjkrJt7VBk1cdMOMRJp.U/HoJgdPQDVb7ue2Ujg6ya9Hwm",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "faae0509-e79a-4329-9bbc-1aa83b55ecae",
      "username": "rizkys",
      "email": "rizkys@gmail.com",
      "password": "$2a$10$j00JpEFrpBmmZdobHPbDI.UfMHc7Udwb768g5D6v1x/u5FTLWeUWa",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "0fa90151-8ca9-455a-900f-4534831cd211",
      "username": "Pradita",
      "email": "pradita1@gmail.com",
      "password": "$2a$10$i/qDURkDgou77o8CG3FQc.MSyv3SBqbAHmXHAYI1cQmn2IJ5QVv6C",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "e6c45bfb-76bc-4018-aa99-7db30deaab9b",
      "username": "Helmi 2",
      "email": "helmi2@gmail.com",
      "password": "$2a$10$jJ8FGw/M3L/VZU/WTVTrgey9c000FsflsNqVce1IF0A425gwxZZcm",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "10421a3d-0d6e-49d0-b8e6-04df33057c36",
      "username": "rizky",
      "email": "rizkysyahputra14045@gmail.com",
      "password": "$2a$10$lFVnCxiNWnhBjDmiv5RO7uE8CYSjFEnHVh0TNP3DlRhgY9TZhqi9u",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "548cb5ec-d19d-4cff-bec3-c501f76bb2b4",
      "username": "Hasanah",
      "email": "hasanaharumprimasari@gmail.com",
      "password": "$2a$10$iaZGCUmWIkRP37/VKwwrletHRS41DXGhghV/JBAV67uzJvuZ6xZQO",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "a26ed862-4853-457c-9717-34a51f098083",
      "username": "undefined",
      "email": "helmitest123@gmail.com",
      "password": "$2a$10$cgeI8mDXpFkEDYP6CU3cy.vP7Q3.JKSoWsc3t9FcbvcU2A5G1HAsS",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "7d31d6e5-acbb-450e-8f81-966b91788b69",
      "username": "undefined",
      "email": "helmipraditaa@gmail.com",
      "password": "$2a$10$Xha272UXuSX9CdfcrXxej.woW3eqZGqlhstEFVghwk/Hb3/AM8G/e",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1674072858/telegram-app/Group_1233_zwi1oy.png"
    }
  ],
  "message": "get all users success"
}
```

#### Get all By id users

```
  GET /users/:id
```

Field auth

| Field    | Type     | Description                             |
| :------- | :------- | :-------------------------------------- |
| `bearer` | `string` | **Required**. token from response login |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "c6ccebf5-99dc-4851-b910-4b40075d7739",
      "username": "halo helmi",
      "email": "halo@gmail.com",
      "password": "$2a$10$5xP2gEbwZeJjTKJls8xV3.vhkNwb7Fzbced4hTQwf6bVxgcgvZs4u",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "496f43b2-b462-4279-a340-18cbead5a092",
      "username": "Helmi 1",
      "email": "helmi1@gmail.com",
      "password": "$2a$10$qkIckXl/bwtNR71UJjHBzenCur9ZW9Ui7gq6Jif3SS38fCfM6eu6e",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "d20daaf7-4f7c-427a-b466-939c3c049db6",
      "username": "heihelmi",
      "email": "heihelmi@gmail.com",
      "password": "$2a$10$mP3LlKY3HDuONX7xiwhBt.DA0rG9k4MlpyziqXP6dERDlSaU6MHLi",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "b0230f6f-27d3-4f20-82d5-068ea43da40d",
      "username": "Helmi test",
      "email": "helmitest@gmail.com",
      "password": "$2a$10$sMHDtMGsTpqfWiVyDOICEOIJ12ZUGmty4VlvOYekTmn5HtsAaDvaW",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "85e853bc-b097-4a56-912d-7ee05b6bcf5f",
      "username": "Pradita",
      "email": "pradita@gmail.com",
      "password": "$2a$10$sMnkuN8fmCck6j9ZIybzbuV5zeA2RmX9MOCr7w3UB5Pytql9BauLq",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1674072865/telegram-app/Mask_Group_meywk9.png"
    },
    {
      "id": "79ef4609-6f77-4fd8-9582-12dc011c79f5",
      "username": "Rizky",
      "email": "rizky@gmail.com",
      "password": "$2a$10$u8cdWL4UpFEH0nBxZbb9Ue4JnP9qcRSs3M5ogFncFw2Jd4yfR9tBC",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "ddeb07d9-e6b3-49ee-8341-4d269c180c0b",
      "username": "Rizky baru",
      "email": "rizkybaru@gmail.com",
      "password": "$2a$10$wCbUI1fhjkrJt7VBk1cdMOMRJp.U/HoJgdPQDVb7ue2Ujg6ya9Hwm",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "faae0509-e79a-4329-9bbc-1aa83b55ecae",
      "username": "rizkys",
      "email": "rizkys@gmail.com",
      "password": "$2a$10$j00JpEFrpBmmZdobHPbDI.UfMHc7Udwb768g5D6v1x/u5FTLWeUWa",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "0fa90151-8ca9-455a-900f-4534831cd211",
      "username": "Pradita",
      "email": "pradita1@gmail.com",
      "password": "$2a$10$i/qDURkDgou77o8CG3FQc.MSyv3SBqbAHmXHAYI1cQmn2IJ5QVv6C",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "e6c45bfb-76bc-4018-aa99-7db30deaab9b",
      "username": "Helmi 2",
      "email": "helmi2@gmail.com",
      "password": "$2a$10$jJ8FGw/M3L/VZU/WTVTrgey9c000FsflsNqVce1IF0A425gwxZZcm",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "10421a3d-0d6e-49d0-b8e6-04df33057c36",
      "username": "rizky",
      "email": "rizkysyahputra14045@gmail.com",
      "password": "$2a$10$lFVnCxiNWnhBjDmiv5RO7uE8CYSjFEnHVh0TNP3DlRhgY9TZhqi9u",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "548cb5ec-d19d-4cff-bec3-c501f76bb2b4",
      "username": "Hasanah",
      "email": "hasanaharumprimasari@gmail.com",
      "password": "$2a$10$iaZGCUmWIkRP37/VKwwrletHRS41DXGhghV/JBAV67uzJvuZ6xZQO",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    },
    {
      "id": "a26ed862-4853-457c-9717-34a51f098083",
      "username": "undefined",
      "email": "helmitest123@gmail.com",
      "password": "$2a$10$cgeI8mDXpFkEDYP6CU3cy.vP7Q3.JKSoWsc3t9FcbvcU2A5G1HAsS",
      "photo": "https://res.cloudinary.com/dnu5su7ft/image/upload/v1672552579/default_profile.png"
    }
  ],
  "message": "get all users success"
}
```


</details>

## API Reference - Message

<details>
<summary>Show</summary>
<br>

#### get all recipes

```
  GET /recipes/all
```

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "825057b5-7f1a-495e-86a0-329e2e9ee94e",
      "title": "Nasi Goreng",
      "ingredients": "Nasi putih, Bawang putih, Minyak Goreng, Penyedap rasa",
      "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673501227/foodrecipe/gxucm71tmnpsedjlhgcc.jpg",
      "videos": "youtube.com",
      "user_id": "3d3c5f0c-1733-491a-baa6-c5990d1b2eb2",
      "author": "Helmi Pradita pradita",
      "created_at": "tuesday  , 10 January   2023",
      "updated_at": "thursday , 12 January   2023"
    },
    {
      "id": "f3b5229f-2caa-45cd-aa8b-77ade69a7e46",
      "title": "Soto ayam",
      "ingredients": "Bumbu soto instant, ayam goreng di suwir kecil kecil, telur rebus",
      "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673501269/foodrecipe/u6bi7xhbt7xixhethfcw.jpg",
      "videos": "youtube.com",
      "user_id": "3d3c5f0c-1733-491a-baa6-c5990d1b2eb2",
      "author": "Helmi Pradita pradita",
      "created_at": "tuesday  , 10 January   2023",
      "updated_at": "thursday , 12 January   2023"
    },
    {
      "id": "978dcc2b-f787-44d2-bce8-dd9b6e9ff4d4",
      "title": "Kare ayam",
      "ingredients": "Bumbu kare ayam, minyak goreng, ayam rebus",
      "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673501316/foodrecipe/kb7awormojvfoasggepx.png",
      "videos": "youtube.com",
      "user_id": "3d3c5f0c-1733-491a-baa6-c5990d1b2eb2",
      "author": "Helmi Pradita pradita",
      "created_at": "tuesday  , 10 January   2023",
      "updated_at": "thursday , 12 January   2023"
    },
    {
      "id": "c79762f0-4dfb-46f3-bd3b-17c62f9ccfb1",
      "title": "Salad ",
      "ingredients": "Tomat, buncis, kentag bawang putih\r\nGula, Garam",
      "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673501163/foodrecipe/vzdh9u3mixqpoozef08u.png",
      "videos": "youtube.com",
      "user_id": "3d3c5f0c-1733-491a-baa6-c5990d1b2eb2",
      "author": "Helmi Pradita pradita",
      "created_at": "wednesday, 11 January   2023",
      "updated_at": "thursday , 12 January   2023"
    }
  ],
  "message": "get recipes success",
  "pagination": {
    "currentPage": 1,
    "limit": 4,
    "totalData": 9,
    "totalPage": 3
  }
}
```

#### Add recipes

```
  POST /recipes
```

Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body form

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `title` | `string` | **Required**. title        |
| `ingredients`   | `string` | **Required**. ingredients |
| `videos`   | `string` | **Required**. videos |
| `photo`   | `string` | **Required**. photo |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "dddfe2ee-3688-4e68-b73f-32bf66661732",
    "title": "Insert baru 7",
    "ingredients": "Tepung terigu",
    "videos": "youtube.com",
    "user_id": "34224357-1a26-4e09-8e97-898a4ad66af9",
    "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673915955/foodrecipe/rt9fe46qkeqffqebxc0c.jpg"
  },
  "message": "insert recipe success"
}
```

#### Get my recipes

```
  GET /recipes
```
Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "dddfe2ee-3688-4e68-b73f-32bf66661732",
      "title": "Insert baru 7",
      "ingredients": "Tepung terigu",
      "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673915955/foodrecipe/rt9fe46qkeqffqebxc0c.jpg",
      "videos": "youtube.com",
      "user_id": "34224357-1a26-4e09-8e97-898a4ad66af9",
      "author": "Helmi Pradita update",
      "created_at": "tuesday  , 17 January   2023",
      "updated_at": "tuesday  , 17 January   2023"
    }
  ],
  "message": "get data recipes success"
}
```

#### Detail recipes by id

```
  GET /recipes/dddfe2ee-3688-4e68-b73f-32bf66661732
```
Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |


Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "c79762f0-4dfb-46f3-bd3b-17c62f9ccfb1",
    "title": "Salad ",
    "ingredients": "Tomat, buncis, kentag bawang putih\r\nGula, Garam",
    "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673501163/foodrecipe/vzdh9u3mixqpoozef08u.png",
    "videos": "youtube.com",
    "user_id": "3d3c5f0c-1733-491a-baa6-c5990d1b2eb2",
    "author": "Helmi Pradita pradita",
    "created_at": "wednesday, 11 January   2023",
    "updated_at": "thursday , 12 January   2023"
  },
  "message": "get data recipes success"
}
```

#### Edit recipes

```
  PUT /recipes/dddfe2ee-3688-4e68-b73f-32bf66661732
```

Field auth

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `bearer` | `string` | **Required**. token from response login        |

Field body form

| Field   | Type     | Description                            |
| :------ | :------- | :------------------------------------- |
| `title` | `string` | **Required**. title        |
| `ingredients`   | `string` | **Required**. ingredients |
| `videos`   | `string` | **Required**. videos |
| `photo`   | `string` | **Required**. photo |

Field body form

| Field      | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `email`    | `string` | **Required**. with format email |
| `password` | `string` | **Required**. password          |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": "dddfe2ee-3688-4e68-b73f-32bf66661732",
    "title": "Insert baru 1 update1",
    "ingredients": "Tepung update",
    "videos": "youtube.com update",
    "photo": "http://res.cloudinary.com/dnu5su7ft/image/upload/v1673916081/foodrecipe/fyoqygiqegyye7t6stce.jpg"
  },
  "message": "Edit recipe success"
}
```

#### Delete recipes

```
  DELETE /recipes/0a93d647-4318-4c7f-bc00-08549aac80ba
```

Field auth

| Field    | Type     | Description                             |
| :------- | :------- | :-------------------------------------- |
| `bearer` | `string` | **Required**. token from response login |

Response 200

```json
{
  "success": true,
  "statusCode": 200,
  "message": "delete recipe success"
}
```

</details>

## Related Project
* [`Backend Project Telegram `](https://github.com/helmipradita/be-telegram)
* [`REST API Telegram`](https://api-telegram.helmipradita.dev)

## Contact

Contributors names and contact info Fullstack Developers

* Helmi Pradita [@helmipradita](https://github.com/helmipradita)
