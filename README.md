# Chef Wale

Chef Wale is a multi-role chef booking platform built with React.js, Node.js, Express.js, and Mongoose (MongoDB). The system consists of three separate web interfaces—for Users, Hosts, and Chefs—enabling streamlined booking, management, and participation in culinary events.The platform allows users to interact with the system securely and efficiently, offering seamless CRUD operations, user authentication, and more.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About

Chef Wale connects users with chefs for events, allowing bookings, cancellations, profile management, and history tracking. Hosts manage chefs and users, while chefs control their  bookings, and earnings.

## Features

### User Website
- OTP-based authentication
- Book and cancel chefs for events
- View current and past bookings
- Update profile (image, name, etc.)

### Host Website
- Login with Host ID and password
- Block user accounts
- Cancel bookings
- Add chefs, set availability (available/unavailable)
- View booking history and upcoming bookings
- Manage user and chef data

### Chef Website
- Login with Chef ID and password
- View and manage income
- Cancel or complete bookings
- Update account details
- View upcoming and past bookings

## Tech Stack

- **Frontend:** React.js,bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (using Mongoose)

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Bhaveshkhokhar/chef-booking.git
   ```

2. **Install dependencies for both frontend and backend:**
   ```bash
   cd chef-booking/chefbookingfrontend
   npm install

   cd ../chefbookingcheffrontend
   npm install

   cd ../chefbookinghostfrontend
   npm install

   cd ../chefbookingbackend
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the `backend` folder for database URI, secret keys, etc.

4. **Start the backend server:**
   ```bash
   cd chefbookingbackend
   npm start
   ```

5. **Start the frontend server:**
   ```bash
   cd ../chefbookingfrontend
   npm run dev

   cd ../chefbookingcheffrontend
   npm run dev

   cd ../chefbookinghostfrontend
   npm run dev
   ```

## Usage

- **User Portal:** Register/login, book chefs, manage bookings, update profile.
- **Host Portal:** Manage users/chefs, handle bookings, track history,blocked and unblocked users account,make chef available and unavailable.
- **Chef Portal:** Login, view bookings/income, cancel and complete booking, update profile.

## Contributing

Contributions are welcome! Please open issues or submit pull requests. For major changes, please discuss them first.

