# BACKEND_MONGODB

## Project Setup Instructions

### Prerequisites
- Node.js (v14 or above)
- npm (Node Package Manager)
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**
    ```bash
    git clone <repository-url>
    cd BACKEND_MONGODB
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Configure environment variables**
    - Create a `.env` file in the root directory.
    - Add your MongoDB connection string:
      ```
      MONGODB_URI=<your-mongodb-uri>
      PORT=3000
      ```

4. **Start the server**
    ```bash
    npm start
    ```

### Usage

- The backend will run on `http://localhost:3000` by default.
- Connect your frontend or API client to interact with the endpoints.

### Additional Notes

- Ensure MongoDB is running before starting the server.
- For cloud MongoDB (e.g., Atlas), update the connection string accordingly.
