
# TaskManagement

## Combined Backend and Frontend TaskManagement Project Installation

This project combines a backend and frontend application.

### Add `.env` file in the backend directory

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Create a `.env` file and add the following environment variables:
    ```
    DB_NAME='Database Schema'
    DB_USER='Database User Name'
    DB_PASSWORD='Database Password'
    ```
    ```
    echo DB_NAME='Database Schema' > .env
    echo DB_USER='Database User Name' >> .env
    echo DB_PASSWORD='Database Password' >> .env
    ```


### Combined Installation and Setup

To install the project and start both backend and frontend servers together, follow these steps:

1. Clone the repository and navigate to the root directory:
    ```bash
    git clone https://github.com/sksunil0608/TaskManagement
    cd TaskManagement
    ```

2. Install dependencies for both the backend and frontend:
    ```bash
    npm install
    ```

3. Start both backend and frontend servers together:
    ```bash
    npm start
    ```

## if it is not working then do separate installation 

# Separate Frontend Run

To run the frontend application separately, follow these steps:

1. Navigate to the frontend directory:
    ```bash
    cd TaskManagement/frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend server:
    ```bash
    npm start
    ```

# Separate Backend Run

To run the backend server separately, follow these steps:

1. Navigate to the backend directory:
    ```bash
    cd TaskManagement/backend
    ```

2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    npm start
    ```


This will start both backend and frontend servers concurrently. You can access the backend at `http://localhost:backend_port` and the frontend at `http://localhost:frontend_port`.


