# 🌤️ Node Weather App

A simple weather application built with **Node.js**, **Express**, and **Handlebars (HBS)**. It fetches real-time weather data using the **Geoapify Geocoding API** and **Weatherstack API**. The app is deployed and running live on **Render**.

## 🚀 Live Demo
🔗 [View Deployed App on Render](https://weather-app-demo-sa.onrender.com/)  

## 🛠️ Features
- Search any location to get the current weather.
- Clean and responsive UI using Handlebars templating.
- Graceful error handling for failed API requests.

## 🧑‍💻 Tech Stack
- **Node.js**
- **Express**
- **Handlebars (HBS)**
- **Geoapify API** (for location/geocoding)
- **Weatherstack API** (for weather forecast)
- **Render** (for deployment)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/siddhant197/node-weather-app.git
   cd node-weather-app
2. **Install Dependencies**
   npm install
4. **Create Environment Variables**
   touch .env
   GEO_API_KEY=your_mapbox_api_key
   WEATHER_API_KEY=your_weatherstack_api_key
5. **Run the App**
   npm start
   By default, it runs on: **http://localhost:3000**
6. **Test the App**
