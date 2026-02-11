# RedVapt - AI Penetration Testing Platform

**Author:** Haris Babar

RedVapt is an autonomous multi-agent penetration testing framework designed to automate reconnaissance, scanning, and security analysis using collaborative AI agents. It provides a sophisticated interface for managing security audits and visualizing vulnerabilities.

## Core Features

- **Autonomous Reconnaissance:** Automated target discovery and mapping.
- **AI-Powered Analysis:** Intelligent scanning using Gemini models to identify and explain vulnerabilities.
- **Dynamic Dashboard:** Real-time visualization of security findings and risk posture.
- **Multi-Agent Collaboration:** Specialised agents working together for comprehensive testing.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HarisSheikh012/RedVapt---AI-Penetration-Testing-Platform.git
   cd RedVapt---AI-Penetration-Testing-Platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment:
   Create a `.env.local` file in the root directory and add your API key:
   ```env
   API_KEY=your_gemini_api_key_here
   ```

### Running the Project

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Architecture

RedVapt is built with modern web technologies:
- **Frontend:** React + TypeScript + Vite
- **Styling:** Tailwind CSS
- **AI Logic:** Integrated via `@google/genai` (Gemini Models)
- **Visuals:** Lucide React & Recharts

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---
© 2026 Haris Babar. All rights reserved.
