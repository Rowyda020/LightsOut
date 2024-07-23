# YelpCamp
## YelpCamp is a full-stack web application that allows users to review campgrounds. This project is part of Colt Steele's Web Developer Bootcamp.
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

3. Install dependencies:
  ```
npm install
  ```

5. Set up your environment variables:
   ```
   (Create a .env file in the root directory and add the following):
   DATABASE_URL=<Your MongoDB connection string>
   CLOUDINARY_CLOUD_NAME=<Your Cloudinary cloud name>
   CLOUDINARY_KEY=<Your Cloudinary API key>
   CLOUDINARY_SECRET=<Your Cloudinary API secret>
   ```

### Usage
```
node app.js
```


