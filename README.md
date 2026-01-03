# 🎵 Music Streaming Platform – Microservices Architecture

A scalable **Music Streaming Platform** built using **Node.js microservices**, designed with clear service separation and Redis caching for performance.

## 🧩 Architecture Overview

The system follows a **microservices architecture** consisting of:

- **Frontend** – Web & Mobile UI
- **Songs Service** – Manages songs, metadata, and streaming logic
- **User Service** – Handles authentication, users, and playlists
- **Admin Service** – Manages content moderation and admin operations
- **Redis Cache** – Improves performance with fast data access

Each service runs independently and communicates via REST APIs.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Caching:** Redis  
- **Architecture:** Microservices  
- **Frontend:** Web & Mobile App  
- **Containerization:** Docker (per service)

## 🚀 Key Features

- Independent & scalable services
- Redis caching for faster responses
- Clean service separation
- Easy to extend and maintain

## ▶️ Steps to Use / Run the Project

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/music-streaming-microservices.git
cd music-streaming-microservices


cd songs-service
npm install

cd ../user-service
npm install

cd ../admin-service
npm install
