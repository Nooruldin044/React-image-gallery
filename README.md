# 🌄 React Image Gallery

A simple **Image Gallery App** built with **React.js**, **Axios**, and the free **Pixabay API**.  
Users can search for images (e.g., animals, nature, sky, etc.) and view them in a responsive gallery layout.  

---

## 🚀 Features
- 🔍 Search images by keyword  
- 📷 Fetch images dynamically from Pixabay API  
- ⚡ Responsive grid layout with Tailwind CSS  
- ⏳ Loading state + "No results" message  
- 🌐 Click images to view full-size versions  

---

## 🛠️ Tech Stack
- **React.js** (Frontend)  
- **Axios** (API requests)  
- **Pixabay API** (Free stock photos)  
- **Tailwind CSS** (Styling)  

---

## 📂 Project Structure
react-image-gallery/
│── public/ # Static files
│ ├── index.html
│ └── favicon.ico
│
│── src/ # Main source code
│ ├── components/ # Reusable components
│ │ ├── Gallery.jsx # Image gallery grid
│ │ └── SearchBar.jsx # Search input field
│ │
│ ├── App.jsx # Root component
│ ├── index.js # React entry point
│ └── styles.css # Global styles (Tailwind)
│
│── .gitignore # Git ignore file
│── package.json # Project metadata & dependencies
│── tailwind.config.js # Tailwind configuration
│── README.md # Project documentation


## 🔑 Setup & Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-image-gallery.git
   cd react-image-gallery
