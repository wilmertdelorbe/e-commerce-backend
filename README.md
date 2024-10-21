# E-commerce Back End

## Description

This project is a back-end application for an e-commerce site. It uses Express.js API and Sequelize to interact with a MySQL database. The application provides RESTful API endpoints for managing categories, products, and tags in an e-commerce platform.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Demo](#demo)
- [Questions](#questions)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.
4. Create a `.env` file in the root directory and add your MySQL credentials:
DB_NAME='ecommerce_db'
DB_USER='your_mysql_username'
DB_PW='your_mysql_password'

5. Run the schema.sql file in the db folder to create your database using MySQL shell commands.
6. (Optional) Seed the database by running `npm run seed`.

## Usage

1. Start the server by running `npm start`.
2. Use a tool like Insomnia or Postman to test the API routes.

## API Routes

The application provides the following API routes:

### Attributes
- GET /api/attributes
- GET /api/attributes/:id
- POST /api/attributes
- PUT /api/attributes/:id
- DELETE /api/attributes/:id

### Items
- GET /api/items
- GET /api/items/:id
- POST /api/items
- PUT /api/items/:id
- DELETE /api/items/:id

### Item Groups
- POST /api/itemgroups

For detailed information on how to use these routes, please refer to the code or watch the demonstration video.

## Demo

A video demonstration of the application can be found [here](https://youtu.be/oNRnZPAr9XM?si=1heAmjUTDmc4dIPl).

## Questions

For any questions, please contact me:

GitHub: [wilmertdelorbe](https://github.com/wilmertdelorbe)
Email: wilmertdelorbe21@gmail.com