# Apartment Finder

A full-stack application for listing and managing apartments. The backend is built with **Node.js** and **SqlLite**, and the frontend is built with **Next.js** and **Material-UI**.

---

## Features

### Backend
- **RESTful API** for managing apartments.
- **SqlLite** for storing apartment data.
- Endpoints for:
  - Listing apartments with pagination and search.
  - Getting apartment details.
  - Adding new apartments.

### Frontend
- **Responsive UI** built with Material-UI.
- Pages for:
  - Listing apartments with pagination and search.
  - Viewing apartment details.
- **Search functionality** to filter apartments by name, Project Name, or unit number .

---

## Technologies Used

### Backend
- **Node.js**: Runtime environment.
- **Express.js**: Web framework.
- **SqlLite**: Relational database.
- **TypeScript**: Static typing for JavaScript.

### Frontend
- **Next.js**: React framework for server-side rendering.
- **Material-UI**: UI component library.
- **TypeScript**: Static typing for JavaScript.
---

## Getting Started

### Prerequisites
- **Node.js**: Install from [nodejs.org](https://nodejs.org/).
- **Docker**: Install from [docker.com](https://www.docker.com/).
- **MongoDB**: Optional (if not using Docker).

### Installation

1. **Clone the repository**:

2. **Set up the backend**:
   - Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

3. **Set up the frontend**:
   - Navigate to the `frontend` folder:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

4. **Run with Docker**:
   - Navigate to the root of the project:
     ```bash
     cd ..
     ```
   - Build and start the Docker containers:
     ```bash
     docker-compose up --build
     ```

---

## Running the Application

### Without Docker
1. **Start the backend**:
   - Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Start the server:
     ```bash
     npm start
     ```

2. **Start the frontend**:
   - Navigate to the `frontend` folder:
     ```bash
     cd ../frontend
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

3. **Access the application**:
   - Frontend: Open `http://localhost:3000` in your browser.
   - Backend: The API will be available at `http://localhost:8000`.

### With Docker
1. **Start the application**:
   - Run the following command in the root of the project:
     ```bash
     docker-compose up
     ```

2. **Access the application**:
   - Frontend: Open `http://localhost:3000` in your browser.
   - Backend: The API will be available at `http://localhost:8000`.

---

## API Endpoints

### Apartments
- **GET `/apartments`**: List all apartments with pagination and search.
  - Query parameters:
    - `page`: Page number (default: `1`).
    - `pageSize`: Number of items per page (default: `10`).
    - `query`: Search query (optional).
- **GET `/apartments/:external_id`**: Get details of a specific apartment.
- **POST `/apartments`**: Add a new apartment.
  - Request body:
    ```json
    {
      "name": "Luxury Apartment",
      "description": "A beautiful apartment in the city center",
      "price": 15000000,
      "location": "Giza",
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6XG-NA3YpP3jYdFBhB-s2VIuNzrgrmoyOmg&s",
      "project": "New Giza",
      "area": 130
    }
    ```

---

Enjoy using **Apartment Finder**! 🏠✨

--- 
