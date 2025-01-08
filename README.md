# EquiSports: A Sports Equipment Store

Welcome to EquiSports, an online store where customers can browse, purchase, and review a wide range of sports equipment. From gear to apparel, we cater to different sports disciplines, ensuring you have access to high-quality products to enhance your game. Our platform features user authentication, product management, and an intuitive design for a seamless shopping experience.

# Live Website Link

https://sports-equipment-store-c8fd5.web.app/


# Features:

## Navbar:
Displays the website name, navigation links, and conditional login/register buttons.
If the user is logged in, it shows their photoURL, displayName on hover, and a "Log Out" button.

## Login Page:
Fields for email, password, and Google authentication methods.
Displays an error message using a toast or sweet alert on incorrect credentials.

## Register Page:
Fields for name, email, photoURL, and password with validation (uppercase, lowercase, and minimum 6 characters).
After successful registration or login, a success message appears.

## Home Page:
Includes a banner/slider with at least 3 slides, product section displaying 6 products with "View Details" buttons, and sports categories.
Added a dark/light theme toggle

## Add Equipment Page (Private Route):
Form for adding equipment details such as image, item name, category, description, price, rating, customization, processing time, and stock status.
User email and name are read-only fields.
After submitting, shows a success message.

## All Sports Equipment Page:
Displays equipment in a table format with details like name, category, price, etc.
Includes a "View Details" button that redirects to the view details page.
Implemented a sort feature for the "All Sports Equipment" page based on price, with the ability to sort in ascending and descending order.

## View Details Page (Private Route):
Displays comprehensive details of an equipment item in a card.

## My Equipment List (Private Route):
Displays all equipment added by the logged-in user in a card format with the option to update or delete items.
Deleting an item prompts a confirmation modal.

## Update Page (Private Route):
Form for updating equipment details, with user email and name as read-only.
Displays a confirmation message after a successful update.

## Footer:
Includes the website name, copyright information, contact details, and social media links.

# Technologies Used:

## Frontend: 
   React, React Router, React Icons, CSS
## Backend: 
   Firebase Authentication and Database
## Data Management: 
   Firebase and MongoDB
## Packages: 
   DaysiUI, Tailwind, React Awesome Reveal, React Tooltip

## Dependencies: 
     "dependencies": {
    "@lottiefiles/react-lottie-player": "^3.5.4",
    "axios": "^1.7.9",
    "firebase": "^11.0.2",
    "localforage": "^1.10.0",
    "lottie-react": "^2.4.0",
    "match-sorter": "^8.0.0",
    "react": "^18.3.1",
    "react-awesome-reveal": "^4.2.14",
    "react-dom": "^18.3.1",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.0.2",
    "react-toastify": "^10.0.6",
    "react-tooltip": "^5.28.0",
    "sort-by": "^1.2.0",
    "sweetalert2": "^11.14.5",
    "swiper": "^11.1.15"
  }

  ## devDependencies:

    "devDependencies": {
    "@eslint/js": "^9.15.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "daisyui": "^4.12.14",
    "eslint": "^9.15.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.12.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.16",
    "vite": "^6.0.1"
  } 
