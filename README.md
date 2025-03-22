# 🎟️ Ticket Reservation Website

Welcome to the **Ticket Reservation Website** – a user-friendly platform for booking tickets to **sports matches** and **cinema events**. This web application allows users to browse events, reserve tickets, and generate receipts, while managers have access to ticket availability and user data.

---

## 🚀 Features

✅ **User Authentication** – Secure sign-in to store user details.

✅ **Event Browsing** – Explore upcoming matches and cinema screenings.

✅ **Ticket Booking** – Seamless seat selection and booking system.

✅ **Receipt Generation** – Instant ticket summary with total cost breakdown.

✅ **Manager Access** – Password-protected section to monitor availability & users.

✅ **Responsive Design** – Optimized for desktop and mobile users.

✅ **Local Storage Integration** – Data persistence using `localStorage`.

---

## 📂 Project Structure

### 🔹 Core Pages
📌 **Webpage1.html** - Home page with a **video background** and entry options.

📌 **Webpage2.html** - User **sign-in page** (stores data in `localStorage`).

📌 **Webpage3.html** - Event selection (**sports vs. cinema**).

📌 **Webpage4.html** - Match booking (**choose and reserve seats**).

📌 **Menu.html** - **Cinema ticket booking** (seat selection for "Sheqo").

📌 **Movie-2.html / Movie-3.html** - Additional cinema booking pages.

📌 **Webpage6.html** - **Receipt page** (displays bookings and total cost).

📌 **Webpage7.html** - **Thank You page** after successful booking.

📌 **Webpage8.html** - **Manager Login** (password: "0000").

📌 **Webpage9.html** - **Manager Dashboard** (ticket availability overview).

📌 **Webpage10.html** - **User Data Panel** (stored user information).

### 🔹 Key JavaScript Files
🛠️ **Webpage1.js** – Handles navigation.

🛠️ **Webpage2.js** – Manages form validation & user storage.

🛠️ **Webpage4.js** – Match ticket booking logic.

🛠️ **Webpage6.js** – Retrieves & displays ticket data.

🛠️ **Webpage8.js** – Validates **manager login**.

🛠️ **Webpage9.js** – Displays ticket counts.

🛠️ **Webpage10.js** – Generates user data table dynamically.

### 🎨 Assets 
🎬 Movie posters, **sports team logos**, and **video trailers**.

📸 Background images for **sports & cinema events**.

---

## 🔧 How to Set Up

1️⃣ **Clone the Repository**:
```bash
 git clone https://github.com/your-username/ticket-reservation-website.git
```
2️⃣ **Open the Project**:
- Launch `Webpage1.html` in a web browser.
- Ensure **all assets** are in the correct directories.

3️⃣ **Dependencies**:
- No external setup required! Just a **modern browser**.
- Uses **Font Awesome & Bootstrap Icons** (CDN-based).

---

## 🎭 User & Manager Workflows

👤 **User Flow**
1. Start at **Webpage1.html**.
2. Sign in via **Webpage2.html**.
3. Choose between **matches** (`Webpage4.html`) or **cinema** (`Movie.html`).
4. Book your ticket, confirm your reservation.
5. View your **receipt** (`Webpage6.html`).
6. Complete the process at the **Thank You** page (`Webpage7.html`).

👔 **Manager Flow**
1. Click **Enter as a Manager** on `Webpage1.html`.
2. Login using the **password "0000"** (`Webpage8.html`).
3. View **ticket availability** (`Webpage9.html`).
4. Check **user data** (`Webpage10.html`).

---

## ⚠️ Important Notes
- **Ticket Price**: 200 EGP per ticket (modifiable in JS files).
- **Initial Ticket Counts**:
  - Matches: **100-150 tickets**.
  - Cinemas: **39 seats per movie**.
- **Manager Password**: "0000" (consider enhancing security).
- **Assets (images/videos)** should be manually added.

---

## 🚀 Potential Improvements
🔹 **Database Integration** – Replace `localStorage` with **MySQL** or **MongoDB** for better scalability.

🔹 **User Authentication System** – Implement **JWT or OAuth** for secure login.

🔹 **Dynamic Pricing** – Allow dynamic ticket pricing based on demand.

🔹 **Email Confirmation** – Send booking confirmations via email.

🔹 **Seat Map Visualization** – Improve cinema booking with a graphical seat map.

🔹 **Payment Integration** – Add online payment options like **PayPal, Stripe, or credit cards**.

🔹 **Admin Panel Enhancements** – Include advanced **analytics and reports** for better management.

---

## 🤝 Contributing
Contributions are welcome! Feel free to:
- **Fork the repo** 
- **Report issues** 
- **Submit pull requests** 

---

## Author
- [Basem Walid](https://github.com/basemw0)
