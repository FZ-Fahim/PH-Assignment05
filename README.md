# Dev Stack

Dev Stack is a responsive React application that allows users to explore different web development technologies and create their own personalized development stack.

Users can browse technologies by category, view their descriptions, difficulty levels, and ratings, and add or remove technologies from their personal stack.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React-Toastify
- JSON
- JavaScript ES6+

## Features

### 1. Explore Technologies

Browse a collection of development technologies with information such as category, description, difficulty level, rating, and badge.

### 2. Build Your Own Stack

Add technologies to a personal stack and remove them whenever needed. Duplicate technologies are prevented.

### 3. Responsive Design

The application works across desktop, tablet, and mobile devices with a responsive navigation menu and layout.

---

# React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It is a syntax extension that lets us write HTML-like code directly inside JavaScript.

### 2. What is the difference between props and state?

**Props:** Read-only data passed down from a parent component to a child component.

**State:** Internal data managed within a component that can change over time and causes the component to re-render when updated.

### 3. What does the useState hook do, and where did you use it in this project?

`useState` is a React Hook used to create and manage state inside a functional component.

In this project, it is used in `App.tsx` to store:

- The list of technologies
- The user's selected stack
- The loading state

It is also used in `Navbar.tsx` to control whether the mobile menu is open or closed.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` is a React Hook used to perform side effects in a component.

In this project, `useEffect` is used to fetch the technology data from the local `technology.json` file when the application loads.

### 5. Why does every item in a .map() list need a unique key prop?

React requires a unique `key` when rendering a list so that it can identify each item and efficiently update the UI when the list changes.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means displaying different UI depending on a condition.

For example, the Stack Sidebar displays an empty-state message when the user has not selected any technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Parent to Child:** Pass data directly down as custom attributes.

**Child to Parent:** The parent passes a callback function down via props, and the child calls that function with data as an argument when an event occurs.