# Microservice Example

This is a simple microservice example built with Node.js and Express.js. It exposes a RESTful API endpoint that returns a greeting message.

## Getting Started

These instructions will help you get the microservice up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js (version 16.0.0 or higher)
- npm (Node Package Manager)

### Installing

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/DevSecOps-AppSec/nodejs-microservices.git
   ```

2. Navigate to the project directory:

   ```shell
   cd nodejs-microservices
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

### Running the Microservice

To start the microservice, run the following command:

```shell
node server.js
```

The microservice will be running at `http://localhost:80`.

## API Endpoint

The microservice provides a single API endpoint:

### Greeting

- **URL:** `/api/greeting`
- **Method:** GET
- **Parameters:**
  - `name` (optional): The name to include in the greeting message. If not provided, the default value is "Anonymous".
- **Response:**
  - Content-Type: application/json
  - Body: `{ "message": "Hello, {name}!" }`

Example request:

```shell
GET /api/greeting?name=John
```

Example response:

```json
{
  "message": "Hello, John!"
}
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- The microservice is based on the [Express.js](https://expressjs.com) framework.
- Thanks to the Node.js and npm communities for their valuable packages.

Feel free to customize the README.md file according to your specific requirements and project details.
