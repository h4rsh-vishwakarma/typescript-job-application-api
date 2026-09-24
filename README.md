# TypeScript Job Application API

A layered REST API built with TypeScript and Express for tracking job applications.

## Features

- Create job applications
- Fetch an application by ID
- Update application status
- Zod request validation
- Strict TypeScript typing
- Controller-Service-Repository architecture
- Jest and Supertest API tests
- Error handling for invalid and missing records

## Architecture

Request
→ Route
→ Controller
→ Zod Validation
→ Service
→ Repository
→ Response

## Tech Stack

- TypeScript
- Node.js
- Express
- Zod
- Jest
- Supertest

## Run locally

```bash
npm install
npm run dev
