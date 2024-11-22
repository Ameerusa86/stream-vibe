# Stream Vibe 🎥
![image](https://github.com/user-attachments/assets/d4bfa96b-9918-4ceb-83f2-830b6c821219)

Stream Vibe is a modern and intuitive movie website that allows users to explore and discover movies seamlessly. Built with cutting-edge technologies, Stream Vibe provides a clean interface and a dynamic user experience, leveraging the power of the TMDB API for real-time movie data.

## Features 🚀

- **Responsive Design**: Optimized for all devices using Tailwind CSS.
- **Authentication**: Secure user authentication with NextAuth.
- **Dynamic Content**: Fetch and display movie data dynamically using the TMDB API.
- **Modern UI**: Built with Shadcn components for a professional and sleek interface.
- **Performance**: Developed using Next.js 15 for fast and scalable performance.

---

## Tech Stack 🛠️

### Frontend
- **[Next.js 15](https://nextjs.org/)**: React-based framework for building fast web applications.
- **[Shadcn](https://shadcn.dev/)**: Pre-built UI components for consistency and quality.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for responsive and customizable styling.

### Backend
- **[TMDB API](https://www.themoviedb.org/documentation/api)**: Source of all movie and TV show data.
- **[NextAuth](https://next-auth.js.org/)**: Authentication library for secure and extensible login functionality.

---

## Getting Started 🏁

Follow these instructions to set up and run Stream Vibe locally:

### Prerequisites
- Node.js v18+ installed on your system.
- TMDB API key. Sign up at [TMDB](https://www.themoviedb.org/) to get your API key.
- Environment variables for authentication setup (e.g., Google or GitHub providers with NextAuth).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/stream-vibe.git
   cd stream-vibe
    ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables: Create a .env.local file in the root directory and add the following:
```bash
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```
4. Start the development server:
```bash
npm run dev
```
5. Open your browser and visit http://localhost:3000

## Usage 🖥️
1. Explore Movies: Browse through the latest and popular movies fetched directly from TMDB.
2. User Authentication: Log in securely with Google, GitHub, or email authentication.
3. Dynamic Content: Enjoy personalized experiences with dynamically loaded data.

## Deployment 🚀
You can deploy Stream Vibe on any platform that supports Node.js. Popular options include:

Vercel
Netlify
Follow the deployment instructions of your chosen platform and ensure all environment variables are correctly configured.
