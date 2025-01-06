# GigaGadgets

## Overview
GigaGadgets is a web application designed for showcasing and managing technology and electronics products. The application features product listings by brand, detailed product pages, user authentication, and a dark mode option.

## Key Features
- Product Brands Listing
- Add new Product
- Show Product Details
- Authentication (email, password, Google login, GitHub login)
- Dark mode, Light Mode

## Running the Project Locally

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/mstsurnalyakter/giga-gadgets-client-side.git
    cd giga-gadgets-client-side
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a [.env.local] file in the root directory and add your Firebase configuration:
    ```env
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```

4. Start the development server:
    ```sh
    npm run dev
    ```

## Screenshots

### Home Page
![Home Page](https://i.postimg.cc/W1jVdFWJ/home.png)

### SignUp Page
![SignUp Page](https://i.postimg.cc/JnyVfbnS/signup.png)

### Login Page
![Login Page](https://i.postimg.cc/yxcqds0P/login.png)

### Add Product Page
![Add Product Page](https://i.postimg.cc/MHx57Sht/add-product.png)

### Product Details Page
![Product Details Page](https://i.postimg.cc/mDMM7YPQ/detail.png)


### Not Found Page
![Not Found Page](https://i.postimg.cc/ZKsPRpKw/404.png)
