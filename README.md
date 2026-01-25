# NestJS Todo API

A simple **Todo REST API** built with **NestJS**, **Prisma**, and **PostgreSQL**.
This project is designed to be **interview‑friendly** and **easy to run locally** by reviewers with minimal setup.

---

## 📌 Tech Stack

* **NestJS** – Backend framework
* **Prisma ORM** – Database access & migrations
* **PostgreSQL** – Relational database
* **Docker Compose** – Database provisioning

---

## 🎯 Project Goals

* Demonstrate clean NestJS architecture
* Use Prisma for schema modeling and migrations
* Avoid external cloud dependencies
* Ensure the project runs consistently on any machine

---

## 🧠 Architectural Decisions

* **PostgreSQL is Dockerized** to ensure reviewers can run the project without installing a database manually
* **Prisma Cloud / Data Proxy is not used** to avoid external dependencies and credential issues
* The application itself runs natively (not Dockerized) to keep setup simple and fast

---

## ✅ Prerequisites

Ensure the following are installed:

* **Node.js** (v18 or higher recommended)
* **Docker & Docker Compose**
* **npm** (or yarn)

---

## 🔐 Environment Variables

Create a `.env` file in the project root (or copy from `.env.example`).

### `.env.example`

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/todo_db"
```

> ⚠️ The `.env` file is intentionally **not committed** to version control.

---

## 🚀 Running the Project

### 1️⃣ Start PostgreSQL using Docker

```bash
docker compose up -d
```

This starts a Postgres database on:

```
localhost:5432
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Run Prisma migrations

```bash
npx prisma migrate dev --name init
npx prisma generate
```

This will:

* Create database tables
* Generate Prisma Client

---

### 4️⃣ Start the NestJS application

```bash
npm run start:dev
```

The API will be available at:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### ➕ Create a Todo

```http
POST /todos
```

Request body:

```json
{
  "title": "Learn Prisma",
  "description": "Build a Todo API with NestJS"
}
```

---

### 📄 Get All Todos

```http
GET /todos
```

---

### ✏️ Update a Todo

```http
PATCH /todos/:id
```

Request body:

```json
{
  "completed": true
}
```

---

### ❌ Delete a Todo

```http
DELETE /todos/:id
```

---

## 🗄️ Database Schema (Prisma)

```prisma
model Todo {
  id          Int      @id @default(autoincrement())
  title       String
  description String?
  completed   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

---

## 🧪 Notes for Reviewers

* The database runs via Docker for consistency
* Prisma migrations handle schema creation automatically
* No cloud services or credentials are required
* The application should run with the commands listed above

---

## 🔮 Possible Improvements

* DTO validation using `class-validator`
* Authentication & authorization (JWT)
* Pagination and filtering
* Soft deletes
* Automated tests

---

## 👤 Author

**Toluwase**
