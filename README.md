# MeFormer Backend API

A Node.js backend service for the MeFormer learning platform, built with Express and MongoDB.

## Features

- 🔐 JWT Authentication
- 🗄️ MongoDB Integration
- 🔄 RESTful API
- 📚 Course Management
- 👤 User Management
- 📊 Progress Tracking
- 🐳 Docker Support

## Tech Stack

- Node.js & Express
- TypeScript
- MongoDB
- JWT Authentication
- Docker
- Winston Logger
- Jest for Testing

## Prerequisites

- Node.js >= 14
- MongoDB
- Docker & Docker Compose (optional)
- npm or yarn

## Project Structure

```
src/
├── config/                 # Configuration files
│   └── database.ts
├── controllers/           # Request handlers
│   └── authController.ts
├── middleware/           # Custom middleware
│   └── auth.ts
├── models/              # Database models
│   ├── User.ts
│   ├── Course.ts
│   └── Progress.ts
├── routes/             # API routes
│   └── auth.ts
├── services/          # Business logic
├── utils/            # Utility functions
└── server.ts           # App entry point
```

## Installation

1. Clone the repository
```bash
git clone https://github.com/Neoxs/meformer-backend.git
cd meformer-backend
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file
```env
PORT=5000
MONGODB_URI=mongodb://rootuser:rootpass@localhost:27017/meformer?authSource=admin
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

4. Start MongoDB using Docker
```bash
docker-compose up -d
```

5. Start the server
```bash
npm run dev
```

## API Endpoints

### Authentication
```
POST /api/auth/register - Register a new user
POST /api/auth/login    - Login user
```

### Courses
```
GET    /api/courses     - Get all courses
GET    /api/courses/:id - Get course by ID
POST   /api/courses     - Create new course (Admin)
PUT    /api/courses/:id - Update course (Admin)
DELETE /api/courses/:id - Delete course (Admin)
```

### Users
```
GET    /api/users/profile     - Get user profile
PUT    /api/users/profile     - Update user profile
GET    /api/users/progress    - Get user progress
```

## Scripts

```json
{
  "scripts": {
    "start": "node dist/app.js",
    "dev": "nodemon src/app.ts",
    "build": "tsc",
    "test": "jest",
    "lint": "eslint src/**/*.ts",
    "docker:up": "docker-compose up -d",
    "docker:down": "docker-compose down"
  }
}
```

## Database Models

### User Model
```typescript
interface IUser {
  email: string;
  password: string;
  role: 'student' | 'parent';
  profile: {
    firstName: string;
    lastName: string;
  };
}
```

### Course Model
```typescript
interface ICourse {
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  topics: string[];
  content: ICourseContent[];
}
```

## Docker Support

### docker-compose.yml
```yaml
version: '3.8'
services:
  mongodb:
    image: mongo
    container_name: mongodb
    ports:
      - 27017:27017
    volumes:
      - data:/data
    environment:
      - MONGO_INITDB_ROOT_USERNAME=rootuser
      - MONGO_INITDB_ROOT_PASSWORD=rootpass
  
  mongo-express:
    image: mongo-express
    container_name: mongo-express
    restart: always
    ports:
      - 8081:8081
    environment:
      - ME_CONFIG_MONGODB_ADMINUSERNAME=rootuser
      - ME_CONFIG_MONGODB_ADMINPASSWORD=rootpass
      - ME_CONFIG_MONGODB_SERVER=mongodb

volumes:
  data: {}

networks:
  default:
    name: mongodb_network
```

## Testing

Run tests using Jest:
```bash
npm test
```

## Development Guidelines

1. Code Style
   - Use TypeScript for all new files
   - Follow ESLint configuration
   - Use async/await for asynchronous operations

2. API Response Format
```typescript
{
  success: boolean;
  data?: any;
  error?: string;
  message?: string;
}
```

3. Error Handling
```typescript
try {
  // Your code
} catch (error) {
  next(error);
}
```

## Deployment

1. Build the application:
```bash
npm run build
```

2. Start in production:
```bash
NODE_ENV=production npm start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
