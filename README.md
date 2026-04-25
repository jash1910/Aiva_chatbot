# Aiva Chatbot

Aiva Chatbot is a modern AI-powered conversational web application designed to deliver smooth, responsive, and intelligent real-time interactions. Built with React and Vite, the project focuses on clean UI, fast performance, scalable structure, and seamless API integration for an engaging user experience.

The application is designed with a professional product-oriented interface rather than a typical “AI-generated” chatbot style, making it suitable for portfolio presentation, academic projects, and real-world deployment demonstrations.

## Live Demo

https://aiva-chatbot-gold.vercel.app/

---

## Features

* Real-time conversational chatbot interface
* Gemini API integration for intelligent responses
* Clean and professional modern UI
* Fully responsive design across devices
* Smooth user interaction and chat flow
* Fast rendering with Vite
* Environment variable security using `.env`
* Production deployment using Vercel
* Scalable project structure for future expansion

---

## Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* Vite

### API & Deployment

* Gemini API
* Vercel

### Version Control

* Git
* GitHub

---

## Project Structure

```text
Aiva_chatbot/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│
├── .env
├── .gitignore
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/jash1910/Aiva_chatbot.git
cd Aiva_chatbot
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Create Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

Important:
Do not push `.env` to GitHub.

Make sure `.gitignore` contains:

```text
.env
node_modules
dist
```

---

### 4. Start Development Server

```bash
npm run dev
```

Application runs at:

```text
http://localhost:5173
```

---

## Vercel Deployment

This project is deployed using Vercel for fast and reliable production hosting.

### Deployment Steps

1. Push the project to GitHub
2. Import the repository into Vercel
3. Add environment variables in Vercel:

```text
VITE_GEMINI_API_KEY
```

4. Redeploy the latest build

---

## Fix for Route Handling on Vercel

Since this project uses React + Vite routing, Vercel requires route rewrites for paths like:

```text
/chat
/about
/profile
```

Create a `vercel.json` file:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This prevents deployment errors like:

```text
404: NOT_FOUND
```

---

## Security Best Practices

* Never commit `.env` files
* Rotate API keys immediately if exposed
* Use Vercel Environment Variables for production
* Keep sensitive variables marked as protected
* Store secrets securely outside source control

---

## Future Improvements

* Chat history persistence
* User authentication system
* Dark and Light mode toggle
* Voice-based interaction
* AI memory and personalization
* Multi-language support
* Advanced prompt optimization
* Analytics dashboard for conversations

---

## Author

Developed by **Jashvitha**

Focused on building clean, scalable, and production-ready frontend applications with strong attention to UI/UX and real-world deployment practices.

---

## License

This project is created for educational, portfolio, and demonstration purposes.
