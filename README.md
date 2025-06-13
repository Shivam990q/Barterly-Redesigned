# Starry Shape Market - Barterly Redesign

![image_2025-06-10_21-39-18](https://github.com/user-attachments/assets/0d340e35-0cbb-4bc0-badc-b237477e91d6)

![image_2025-06-10_21-39-55](https://github.com/user-attachments/assets/bde1a5d9-fe74-4b1e-b83a-a3c26d48e204)

![image_2025-06-10_21-40-47](https://github.com/user-attachments/assets/da88f82f-d31d-4620-8966-c6d1080a3ba7)


## 🚀 Overview

Starry Shape Market is a redesigned version of "Barterley" built from scratch. It's a modern skill trading platform where users can exchange skills and services instead of using traditional currency. The platform empowers users to monetize their talents while accessing services they need through a skill-based barter system.

**"Your Skill is Your Currency"** - LIVE PREVIEW LINK - https://barterly-redesigned.onrender.com

## ✨ Improvements - Redesigned
- **Signup / Register - Added Signup Page**
- **Signin / login - Added login Page**
- **Added "Privacy Policy" and "Terms & Condition" Page**
- **Fixed the Responsiveness In Header Bar For Phone View Specially**
- **Added Stars Animation ( Twinkling ) - Used Custom CSS With FRAMER MOTION**
- **Added 2D Shapes With FRAMER MOTION ( TO ANIMATE )**
- **Redesigned Footer Design**
- **In MarketPlace Added Custom API Integation For AI Powered Search**

## ✨ Features

- **Skill Wallet**: Track your skill hours and manage your transactions in one place
- **Skill Marketplace**: Browse and discover skills offered by people in your community
- **Live Sessions**: Conduct real-time skill-sharing sessions with integrated video conferencing
- **Barter System**: Exchange skills without traditional currency
- **AI-Powered Recommendations**: Get personalized skill match recommendations using various AI models
- **User Profiles**: Showcase your skills, expertise, and reviews
- **Session Management**: Schedule and track your skill exchange sessions

## 🛠️ Tech Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query for server state
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**:
  - Framer Motion For Animation
  - Radix UI primitives
  - Lucide React icons
  - Date-fns for date handling
  - Recharts for data visualization
  - Sonner for toast notifications

## 📋 Prerequisites

- Node.js (v18 or later recommended)
- npm or bun package manager

## 🚀 Getting Started

### Installation

```sh
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd starry-shape-market-main

# Install dependencies
npm install
# or if you prefer using Bun
bun install
```

### Development

```sh
# Start the development server
npm run dev
# or
bun dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is already in use).

### Building for Production

```sh
# Build the application
npm run build
# or
bun run build

# Preview the production build
npm run preview
# or
bun run preview
```

## 🌟 Project Structure

```
starry-shape-market/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and shared logic
│   ├── pages/           # Application pages/routes
│   │   ├── Index.tsx    # Landing page
│   │   ├── Marketplace.tsx # Skill marketplace
│   │   ├── Barter.tsx   # Skill bartering interface
│   │   ├── Sessions.tsx # Session management
│   │   ├── Wallet.tsx   # Skill wallet
│   │   ├── SignIn.tsx   # Authentication
│   │   └── Register.tsx # User registration
│   ├── App.tsx          # Main app component with routing
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── .gitignore           # Git ignore file
├── components.json      # shadcn/ui configuration
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🔧 Configuration

The project uses several configuration files:

- `vite.config.ts`: Vite bundler configuration
- `tailwind.config.ts`: Tailwind CSS styling configuration
- `tsconfig.json`: TypeScript configuration
- `components.json`: shadcn/ui components configuration

## 📱 Pages & Features

1. **Home Page**: Introduction to the platform with animated UI elements and key features
2. **Marketplace**: Browse available skills with search, filter, and AI-powered recommendations
3. **Barter**: Arrange skill exchanges and negotiate terms
4. **Sessions**: Schedule and manage skill-sharing sessions
5. **Wallet**: Track your skill currency and transaction history
6. **Authentication**: User registration and login functionality

## 🔒 Privacy and Terms

The platform includes dedicated pages for:
- Privacy Policy
- Terms of Service

## 🚀 Deployment

You can deploy this project to any hosting platform that supports static sites:

- Vercel
- Netlify
- GitHub Pages
- AWS Amplify
- Firebase Hosting

## 🧩 Custom Domain Setup

To connect a custom domain, follow the hosting provider's documentation for adding custom domains to your deployment.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open-source and available under the (https://github.com/Shivam990q/Barterly-Redesigned/blob/main/LICENSE.txt)

---

Built with ❤️ using modern web technologies
