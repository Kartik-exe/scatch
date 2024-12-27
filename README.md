# Scatch

Scatch is a full-stack web application designed to showcase the power of modern web development using **HTML**, **CSS**, **MongoDB**, **Express.js**, **EJS**, and **Postman** for API testing. The application allows users to interact with a dynamic website that showcases the integration of front-end and back-end technologies.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Testing](#api-testing)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Full-Stack Integration**: Combines front-end and back-end to create a dynamic, interactive web application.
- **MongoDB**: Data storage for managing content and user-related information.
- **Express.js**: Web framework to handle server-side logic and routes.
- **EJS**: Templating engine to dynamically render HTML pages.
- **API Testing**: Utilizes Postman to test and ensure API functionality.

## Technologies Used
- **HTML**: Structure and content of the web pages.
- **CSS**: Styling the application and making it responsive.
- **MongoDB**: NoSQL database for storing and retrieving data.
- **Express.js**: Web framework for building the server-side application.
- **EJS**: Templating engine for embedding JavaScript into HTML.
- **Postman**: Tool for API testing and documentation.

## Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/scatch.git
   ```

2. Navigate into the project directory:
   ```bash
   cd scatch
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Set up MongoDB locally or use a cloud service like MongoDB Atlas. Make sure to add the connection string in the `config/keys.js` or environment variables.

5. Start the application:
   ```bash
   npm start
   ```

6. Open the app in your browser by going to `http://localhost:3000`.

## Usage
Once the application is up and running, you can:

- Browse through dynamic pages rendered with EJS templates.
- Add, view, and delete data from MongoDB.
- Test and interact with APIs for data retrieval and submission.
  
## API Testing

Postman is used for testing APIs in this project. Follow the steps below to test the API:

1. Open **Postman** and import the provided **Scatch API collection**.
2. Run the API endpoints to test the functionality, such as:
   - **GET** `/api/data`: Fetches data from the server.
   - **POST** `/api/data`: Adds new data to the server.
   - **DELETE** `/api/data/:id`: Deletes data by ID.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request describing your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
