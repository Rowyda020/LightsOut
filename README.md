# LightsOut
## LightsOut is a full-stack web application that allows users to review campgrounds. 
###  Table of Contents
  - Features
  - Technologies Used
  - Installation
  - Usage
  - License

### Features
  - User authentication and authorization
  = Create, edit, and delete campgrounds
  - Leave reviews on campgrounds
  - Upload campground images
  - Search campgrounds by location

### Technologies Used
### - Frontend:

  - HTML
  - CSS
  - JavaScript
  - Bootstrap

### - Backend:

  - Node.js
  - Express.js
  - MongoDB
  - Passport.js (for authentication)
  - Cloudinary (for image upload)

### Installation

1. Clone the repository:
  ```
   git clone https://github.com/yourusername/yelpcamp.git
   cd yelpcamp
  ```
2. Install dependencies:
  ```
   npm install
  ```

3. Set up your environment variables:
  ```
   (Create a .env file in the root directory and add the following):
   DATABASE_URL=<Your MongoDB connection string>
   CLOUDINARY_CLOUD_NAME=<Your Cloudinary cloud name>
   CLOUDINARY_KEY=<Your Cloudinary API key>
   CLOUDINARY_SECRET=<Your Cloudinary API secret>
  ```
4.Seed the database (optional):
  ```
   node seeds/index.js
  ```

### Usage
1. Start the application:
  ```
   node app.js
  ```
2. Open your browser and go to http://localhost:3000.

![Screenshot 2023-07-30 215803](https://github.com/user-attachments/assets/b1abb01b-20ba-4a33-8c2a-491324e04995)
![Screenshot 2023-07-30 215632](https://github.com/user-attachments/assets/8131a714-e0d7-4fa2-a439-186fac6179ea)
![Screenshot 2023-07-30 215715](https://github.com/user-attachments/assets/e95d27be-5801-4219-bb98-d3f40ce3290f)

