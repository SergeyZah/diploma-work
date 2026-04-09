Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# SkyFitnessPro

SkyFitnessPro is a Next.js application for online fitness courses, workouts, and progress tracking.

## Features

- User login and registration
- Course catalog
- Course details page
- Workout selection flow
- Workout progress tracking and saving
- Profile page with selected courses and progress
- Modal routes for auth, workout selection, and progress entry
- Responsive layout for desktop, tablet, and mobile
- User-facing error handling for key API flows

## Stack

- Next.js 16
- React 19
- TypeScript
- Redux Toolkit
- redux-toastify
- CSS Modules
- jest

## Requirements

- Node.js 20+
- npm 10+

## Installation

```bash
npm install
```

## Run Locally

Development mode:

```bash
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

Tests:

```bash
npm test
```

## Environment

The app uses `BASE_URL` for API requests.

Example:

```env
BASE_URL=https://wedev-api.sky.pro
```

## Testing

The project uses `Jest` for unit tests.

Test files:

- [utils\calculatingProgress.test.ts](C:\Users\user\Desktop\Все\Skypro\diploma-work\src\utils\calculatingProgress.test.ts)
- [utils\croppingLines.test.ts](C:\Users\user\Desktop\Все\Skypro\diploma-work\src\utils\croppingLines.test.ts)
- [utils\FetchRightCover.test.ts](C:\Users\user\Desktop\Все\Skypro\diploma-work\src\utils\FetchRightCover.test.ts)
- [utils\fetchSelectedCourses.test.ts](C:\Users\user\Desktop\Все\Skypro\diploma-work\src\utils\fetchSelectedCourses.test.ts)

## Error Handling

API calls are located in [`\services\`](C:\Users\user\Desktop\Все\Skypro\diploma-work\src\services).

The app uses a shared pattern:

- API functions display error messages
- User interface components display error messages encountered by the user

This is applied to:

- catalog loading
- auth flows
- add/remove course actions
- workout loading
- workout progress loading and saving

## Project Structure

### App

- [`app\courses\main\page.tsx`](C:\Users\user\Desktop\Все\Skypro\diploma-work\src\app\courses\main\page.tsx): Main page
- [`app\courses\course\[id]\page.tsx`](C:\Users\user\Desktop\Все\Skypro\diploma-work\src\app\courses\course\[id]\page.tsx): course page
- [`app\courses\workouts\[course]\page.tsx`](C:\Users\user\Desktop\Все\Skypro\diploma-work\src\app\courses\workouts\[course]\page.tsx): workout selection page
- [`app\courses\workout\[id]\page.tsx`](C:\Users\user\Desktop\Все\Skypro\diploma-work\src\app\courses\workout\[id]\page.tsx): workout page
- [`app\courses\profile\page.tsx`](C:\Users\user\Desktop\Все\Skypro\diploma-work\src\app\courses\profile\page.tsx): profile page

### Components

- [`components\AuthModal`](C:\Users\user\Desktop\Все\Skypro\diploma-work\src\components\AuthModal): auth modal
- [`components\FitnessCourse`](C:\Users\user\Desktop\Все\Skypro\diploma-work\src\components\FitnessCourse): course card
- [`components\FitnessCourseBottom`](C:\Users\user\Desktop\Все\Skypro\diploma-work\src\components\FitnessCourseBotom): lower block on course card
- [`components\SelectWorkouts`](C:\Users\user\Desktop\Все\Skypro\diploma-work\src\components\SelectWorkouts): workout picker
- [`components\Workout`](C:\Users\user\Desktop\Все\Skypro\diploma-work\src\components\Workout): workout exercises and progress
- [`components\ProgressModal`](C:\Users\user\Desktop\Все\Skypro\diploma-work\src\components\ProgressModal): progress entry modal

### Store

- [`store\store.ts`](C:\Users\user\Desktop\Все\Skypro\diploma-work\src\store\store.ts): Redux store setup
- [`store\features\AuthSlice.ts`](C:\Users\user\Desktop\Все\Skypro\diploma-work\src\store\features\AuthSlice.ts): auth state 
- [`store\features\CourseSlice.ts`](C:\Users\user\Desktop\Все\Skypro\diploma-work\src\store\features\CourseSlice.ts): course state


## Notes

- State for auth and progress is persisted with `localStorage`.

