# 🛒 App Store ABD

A modern, full-stack e-commerce platform built with **React** (frontend) and **Node.js/Express/MongoDB** (backend). This project provides a robust online shopping experience with advanced features for customers, store owners, and administrators.

[Live Demo](https://app-store-abd.vercel.app)

---

## ✨ Features

- **User Authentication & Profiles**
  - Register, login, logout, email verification, password reset
  - User profile with address and order management

- **Product Catalog**
  - Browse, search, and filter products
  - Product detail pages with images, pricing, and descriptions

- **Shopping Cart & Checkout**
  - Persistent cart (localStorage) and smooth checkout flow
  - Multiple shipping methods, discount codes, and order summary
  - Secure order placement and order tracking

- **Blog System**
  - Blogs with categories, comments, likes, and views
  - Fast searching with indexed text fields

- **Store Management**
  - Store owners can manage store details (name, description, currency, tax, shipping, contact info)
  - Social media integration for stores

- **Admin Dashboard**
  - Manage products, users, orders, stores, and blogs
  - Secure admin routes and role-based access

- **Policy & Support**
  - Easy exchange & return policies
  - 24/7 customer support via multiple channels

- **Security**
  - JWT-based authentication, session management, and role checks
  - Error handling and protection for production

- **Responsive UI**
  - Mobile-friendly design using React and modern UI libraries

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Redux, React Router, TailwindCSS
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Authentication:** JWT, Passport.js, Sessions
- **APIs:** RESTful (products, users, orders, payments, blogs)
- **Payments:** Stripe (integration ready)
- **State Management:** Redux, Context API
- **Dev Tools:** Vite, ESLint, Prettier

---

## 🚀 Getting Started

1. **Clone the repo**
   ```
   git clone https://github.com/Chaudaryabdullah89/app-store-abd.git
   cd app-store-abd
   ```

2. **Install dependencies**
   - For frontend: `npm install` (in the root)
   - For backend: `npm install` (in the Backend directory)

3. **Set environment variables**
   - Configure `.env` files for both frontend and backend with API URLs, DB connection, and Stripe keys

4. **Run the app**
   - Backend: `npm run dev` (from Backend)
   - Frontend: `npm run dev` (from root)
   - Visit [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
Backend/
  ├── controllers/
  ├── middleware/
  ├── models/
  ├── routes/
  └── server.js
src/
  ├── Components/
  ├── Context/
  ├── Pages/
  ├── utils/
  └── main.jsx
```

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://mongodb.com/)
- [Stripe](https://stripe.com/)
- [TailwindCSS](https://tailwindcss.com/)

---

> Made with ❤️ by [Chaudaryabdullah89](https://github.com/Chaudaryabdullah89)