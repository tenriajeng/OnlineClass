# Point-of-Sales-Api

Point of Sales API Nodejs Express

[Link Host](https://mypoint-of-sales.herokuapp.com/api/menu/)

<!-- Related project : [Hime Restaurant Point Of Sales Frontend](https://github.com/iyansr/hime-restaurant) -->

<div align='center'>
  <img src='https://raw.githubusercontent.com/arul29/Simple-REST-API-Node-Express-MySQL/master/img/ExpressMySQL.jpg' width='800'  />

</div>
<!-- <div align='center'>
 <a href='https://intense-inlet-23820.herokuapp.com/'>
  <img src='http://heroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat&svg=1' />
  </a>
  <a href="http://opensource.org/licenses/MIT">
    <img title="MIT license" src="http://img.shields.io/badge/license-MIT-brightgreen.svg">
  </a>
  <a href="#">
    <img title="Open Source Love" src="https://badges.frapsoft.com/os/v1/open-source.svg?v=102">
  </a>
   <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>

</div> -->

---

## Table Of Contents

- [Table Of Content](#table-of-content)
- [Features](#features)
- [Build Setup](#build-setup)
- [Stacks](#stacks)
- [Dependencies](#dependencies)
- [Aplication Structure](#aplication-Structure)
- [API Docs](#api-docs)
  <!-- - [Novel](#novel)
  - [Genre](#genre) -->

## Features

- List Foods
- CRUD With Upload Image
- Post Transaction
- History Transaction
- Login with JWT

## Build Setup

- Clone Repository `git clone https://github.com/arul29/Point-of-Sales-Express-Api.git`

- Make the `.env` file

  ```env
  DB_HOST =
  DB_USER =
  DB_PASSWORD =
  DB_DATABASE =

  CLOUDINARY_CLOUD_NAME =
  CLOUDINARY_API_KEY =
  CLOUDINARY_API_SECRET =

  SECRET_KEY =
  ```

- Import database `a_pos.sql` to phpMyAdmin

- Install Dependencies

  ```bash
  # with yarn
  $ yarn install

  # or with npm
  $ npm install
  ```

- Run Server

  ```bash
  # with npm
  $ npm start
  ```

- Server will running on port `6660`

## Stacks

- Node JS
- Express
- MySQL

## Dependencies

- multer
- ckoudinary
- jsonwebtoken
- cors
- nodemon
- dontenv

## Aplication Structure

- `app.js` - Entry point of our aplication
- `src/Config` - This folder contain configuration files of our app, such as mysql connection
- `src/Models` - This folder containt files that define query of MysQL
- `src/Routes` - Route of our app going here
- `src/Helpers` - This folder contain file that help you simplify your code such as define the error handling
- `src/Controllers` - This folder contain configuration files that links Models to Route

---

## API Docs

| Method | Endpoint              | Description           | Request Param          | Request Body                                                                                                            | Request Query |
| ------ | --------------------- | --------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------- |
| GET    | /api/menu             | Show All Menu         | -                      | -                                                                                                                       | -             |
| POST   | /api/menu             | Post Menu             | -                      | `name`:STRING (Required) `price`:NUMBER (Required) `category`:STRING (Required) `img`:STRING or BLOB (Required)         | -             |
| PUT    | /api/menu/:id         | Update Menu           | `id`:NUMBER (Required) | `name`:STRING (Required) `price`:NUMBER (Required) `category`:STRING (Required)                                         | -             |
| DELETE | /api/menu/:id         | Delete Menu           | `id`:NUMBER (Required) |                                                                                                                         | -             |
| PUT    | /api/menu/img/:id     | Update Image Menu     | `id`:NUMBER (Required) | `img`:STRING or BLOB (Required)                                                                                         | -             |
| GET    | /api/transaction      | Show All Transaction  | -                      | -                                                                                                                       | -             |
| POST   | /api/transaction      | Post Transaction      | -                      | `transaction_code`:STRING (Required) `cashier`:STRING (Required) `total`:NUMBER (Required) `ppn`:STRING(Required)       | -             |
| GET    | /api/transaction/menu | Show Menu Transaction | -                      | -                                                                                                                       | -             |
| POST   | /api/transaction/menu | Post Menu Transaction | -                      | `transaction_code`:STRING (Required) `id_menu`:NUMBER (Required) `quantity`:NUMBER (Required) `price`:NUMBER (Required) | -             |
| POST   | /api/admin            | Login Admin           | -                      | `username`:STRING (Required) `password`:STRING (Required)                                                               | -             |

---

Copyright © 2020 by Andi Mashdarul Khair
