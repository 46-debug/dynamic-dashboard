# Dynamic Dashboard

A simple authentication-based dashboard with protected routes, pagination, and search functionality.

## Features

- **Login Page**

  - Email and password fields with validation.
  - Stores mock JWT token and user email in local storage upon login.
  - Redirects to `/dashboard` after successful login.

- **Dashboard**

  - Header, Sidebar, and Main content sections.
  - **Header**
    - Displays logged-in user's email.
    - Logout button that removes JWT token from local storage and redirects to the login page.
  - **Sidebar**
    - Contains three routes: `Dashboard`, `Profile`, and `Settings`.
    - Clicking a route redirects to the respective page.
  - **Main Content**
    - Displays a list of posts with **pagination** (5 posts per page).
    - Posts are **fetched in a server component** and passed to the client component for **search** and **pagination** features.

## Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/46-debug/dynamic-dashboard.git
cd <dynamic-dashboard>
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Start the Development Server

```sh
npm run dev
```

The app should now be running at `http://localhost:3000/`.

## Running the Project

1. **Login** with a valid email and password.
2. You will be redirected to the **Dashboard**.
3. The **Sidebar** allows navigation between `Dashboard`, `Profile`, and `Settings`.
4. The **Main Content** displays posts with **search and pagination** features.
5. Click **Logout** to remove the token and return to the login page.

## Technologies Used

- **Next.js** (React framework for SSR)
- **Tailwind CSS** (Styling)
- **Local Storage** (Token management)
- **Mock API** (Fetching posts)
- **Server Components** (Fetching posts in the server component and passing to the client component)

## Notes

- Ensure the **mock API endpoint** is accessible when fetching posts.
- Use a **valid email format** in the login form for proper validation.
- The project is structured with **client and server components** for better performance.

