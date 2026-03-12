# Ajay Singh Rajput Portfolio

A modern, responsive portfolio website built with Next.js 16, React 19, and Tailwind CSS. This portfolio showcases the professional profile, skills, experience, projects, and education of Ajay Singh Rajput, a Software Engineer specializing in PHP Laravel development.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16.1.4-black?style=flat&logo=next.js) ![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat&logo=react) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat&logo=tailwind-css) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices (mobile, tablet, desktop)
- **Dark/Light Theme**: Toggle between dark and light themes for better user experience
- **Smooth Animations**: Elegant animations powered by Framer Motion
- **Sections Included**:
  - Hero Section with profile introduction
  - Skills showcase with categorized technical skills
  - Work Experience timeline
  - Educational background
  - Projects portfolio with details
  - Contact information and social links
- **SEO Optimized**: Built with Next.js for better search engine optimization
- **Fast Performance**: Optimized for speed and performance

## 🛠️ Tech Stack

| Category   | Technology           |
| ---------- | -------------------- |
| Framework  | Next.js 16.1.4       |
| UI Library | React 19.2.3         |
| Styling    | Tailwind CSS 4       |
| Language   | TypeScript 5         |
| Animations | Framer Motion 12     |
| Icons      | Lucide React         |
| Deployment | Vercel (recommended) |

## 📁 Project Structure

```
ajay-singh-rajput-portfolio/
├── public/                     # Static assets
│   ├── *.png                   # Project images
│   └── *.svg                   # SVG icons
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/            # React components
│   │   ├── Contact.tsx        # Contact section
│   │   ├── Education.tsx      # Education section
│   │   ├── Experience.tsx     # Experience section
│   │   ├── Footer.tsx          # Footer component
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Projects.tsx        # Projects section
│   │   ├── Skills.tsx          # Skills section
│   │   └── ThemeProvider.tsx   # Theme context provider
│   ├── data/
│   │   └── portfolioData.ts    # Portfolio data configuration
│   ├── styles/
│   │   ├── experience.module.css
│   │   ├── home.module.css
│   │   ├── projects.module.css
│   │   └── skills.module.css
│   └── types/
│       └── index.ts            # TypeScript type definitions
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── package-lock.json           # npm lock file
├── package.json                # Dependencies
├── postcss.config.mjs          # PostCSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** (npm comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ajay-singh-rajput-portfolio
   ```

2. **Install dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## ⚙️ Customization

### Updating Personal Information

All portfolio data is centralized in `src/data/portfolioData.ts`. Modify this file to update:

- **Name & Role**: `name`, `role`, `bio`
- **Profile Image**: Add your image to `public/` folder and update `profileImg` path
- **Skills**: Update the `skills` array
- **Experience**: Modify the `experience` array with your work history
- **Education**: Update the `education` array
- **Projects**: Customize the `projects` array with your projects
- **Social Links**: Update `socialLinks` with your profiles

### Example: Update Name

```typescript
// src/data/portfolioData.ts
export const DATA: PortfolioData = {
  name: "Your Name",
  role: "Your Role",
  // ... other fields
};
```

### Adding New Projects

Add new project entries to the `projects` array:

```typescript
{
    id: 6,
    title: "Your Project Title",
    category: "Project Category",
    tech: ["PHP", "Laravel", "MySQL"],
    fullDesc: "Project description...",
    img: "/your-image.png",
    link: "https://project-link.com"
}
```

## 🌙 Dark/Light Theme

The portfolio supports both dark and light themes. The theme is stored in localStorage and persists across sessions. The theme toggle button is available in the navbar.

### Theme Colors

- **Light Mode**: White background with green/blue accents
- **Dark Mode**: Dark navy background with purple/blue gradients

## 📱 Responsive Breakpoints

| Breakpoint | Width          | Description          |
| ---------- | -------------- | -------------------- |
| Mobile     | < 640px        | Single column layout |
| Tablet     | 640px - 1024px | Adjusted spacing     |
| Desktop    | > 1024px       | Full layout          |

## 🔧 Build for Production

To create an optimized production build:

```bash
npm run build
```

This will create a `.next` folder with the production-ready files. To start the production server:

```bash
npm start
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy"

### Other Platforms

The project can also be deployed to:

- Netlify
- AWS Amplify
- Heroku
- Docker containers

For Docker deployment, create a `Dockerfile` in the root directory.

## 📄 License

This project is for demonstration purposes. Feel free to use and customize it for your own portfolio.

---

Built with ❤️ using Next.js and Tailwind CSS

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**Note**: Replace `<repository-url>` with your actual GitHub repository URL when cloning.
