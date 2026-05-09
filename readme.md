# ✅ E-Commerce Informatique

## 📸 Project Preview

![E-Commerce Informatique Homepage](./homepage-preview.png)

---

## 📦 Backend (Node.js + Express + MongoDB + Mongoose)

### ✅ 1. Project Setup

* [x] Initialize Node.js project (`npm init -y`).
* [x] Install dependencies: `express`, `mongoose`, `dotenv`, `cors`.
* [x] Create `server.js` and connect to MongoDB.
* [x] Set up folder structure:

  ```plaintext
  /backend
    /models
    /routes
    /controllers
    /middlewares
    /config
  ```

---

### ✅ 2. Models (Mongoose Schemas)

* [x] `User` model.
* [x] `Product` model.
* [x] `Category` model.
* [x] `Order` model.
* [x] `Profile` model.
<!-- * [ ] If needed: `Review`, `Coupon`, `Wishlist`, etc. -->

---

### ✅ 3. API Routes

#### 📁 Auth (`/auth`)

* [x] Register user
* [x] Login user

#### 📁 User (`/user`)

* [x] Get all users
* [x] Get one user
* [x] Add user
* [x] Update user
* [x] Delete user

#### 📁 Products (`/product`)

* [x] Get all products
* [x] Get one product
* [x] Add product
* [x] Update product
* [x] Delete product

#### 📁 Categories (`/category`)

* [x] Get all categories
* [x] Get one category
* [x] Add category
* [x] Update category
* [x] Delete category

#### 📁 Orders (`/order`)

* [x] Get all orders
* [x] Get one order
* [x] Add order

#### 📁 Profile (`/profile`)

* [x] Get A Profile
* [x] Update A Profile

---

### ✅ 4. Middleware

* [ ] Auth protection using JWT
<!-- * [ ] Error handler -->
<!-- * [ ] Validation with `express-validator` -->

---

### ✅ 5. Optional Backend Features

<!-- * [ ] Stripe/PayPal payment integration
* [ ] Email confirmations (e.g. using Nodemailer)
* [ ] Rate limiting for public routes
* [ ] Upload product images (Cloudinary/S3)
* [ ] Seed script to populate initial data -->

---

## 💻 Frontend (React +  Toolkit)

✅ 1. Project Setup

* [x] Set up React with `Vite`
* [ ] Install dependencies: `axios`, `react-router-dom`, `redux-toolkit`, `formik`, `yup`, `tailwindcss`

* [ ] Folder structure:

  ```plaintext
  /frontend
    /components
    /pages
    /store
    /api
    /utils
  ```

---

### ✅ 2. Auth Flow

* [ ] Login / Register form with validation
* [ ] Store JWT in localStorage
* [ ] Protect routes with `PrivateRoute`

---

### ✅ 3. User Features

* [ ] View and edit profile
* [ ] Browse all products
* [ ] Filter / search products
* [ ] View product details
* [ ] View order history
* [ ] Add to cart
* [ ] Checkout page

---

### ✅ 4. Admin Dashboard

* [ ] Manage users
* [ ] Add/edit/delete products
* [ ] Manage categories
* [ ] View all orders

---

### ✅ 5. UI & UX

* [ ] Responsive design (mobile-first)
* [ ] Navbar with dynamic links (based on login/admin)
* [ ] Toast notifications (e.g. with `react-toastify`)
* [ ] Loading and error states
* [ ] Pagination for product list

---

### ✅ 6. Optional Frontend Features

* [ ] Wishlist / Favorites
* [ ] Ratings & Reviews system
* [ ] Product image zoom/slider
* [ ] Dark mode

---

## 🔁 Integration Tasks

* [ ] Connect frontend to backend via `axios`
* [ ] Protect routes and handle auth tokens
* [ ] Sync cart with localStorage
* [ ] Sync order placement with backend
* [x] Test all API calls and handle errors (Postman)

---

## 🔍 Testing & Deployment

### ✅ Testing

* [ ] Unit tests (Jest)
* [ ] Integration tests (Supertest)
* [ ] E2E tests (Cypress)

### ✅ CI/CD

* [ ] Github Actions

### ✅ Deployment

* [ ] Set up `.env` for prod/dev
* [ ] Deploy backend to **Railway**
* [ ] Deploy Admin to **Railway**
* [ ] Deploy frontend to **Netlify**

---

🧩 Bonus Tasks

* [ ] Set up GitHub repo (split frontend/backend/admin)
* [ ] Use ESLint + Prettier for code formatting
* [ ] Add loading skeletons
* [ ] Add PWA support (for offline use)
* [ ] Add SEO tags
