# TaskManagement

This project combines a backend and frontend application for task management.
 1. Clone the repository and navigate to the root directory:
    ```bash
    git clone https://github.com/sksunil0608/TaskManagement
    cd TaskManagement
    ```

## Combined Backend and Frontend TaskManagement Project Installation

### Add `.env` file in the backend directory

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Create a `.env` file and add the following environment variables:
    ```bash
    echo DB_NAME='YourDatabaseSchema' > .env
    echo DB_USER='YourDatabaseUserName' >> .env
    echo DB_PASSWORD='YourDatabasePassword' >> .env
    ```

### Installation and Setup

To install the project and start both backend and frontend servers together, follow these steps:


2. Install dependencies for both the backend:
    ```bash
    npm install
    ```

3. Start the backend:
    ```bash
    npm start
    ```

4. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

5. Install frontend dependencies:
    ```bash
    npm install
    ```

6. Start the frontend server:
    ```bash
    npm start
    ```

This will start both backend and frontend servers concurrently. You can access the backend at `http://localhost:backend_port` and the frontend at `http://localhost:frontend_port`.
