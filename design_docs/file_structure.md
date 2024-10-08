# File Structure (Chat GPT)

root
│
├── build/                    # Build output (dist) will go here
│
├── public/                   # Static assets (favicon, images, etc.)
│   └── index.html            # HTML file for the renderer process
│
├── src/
│   ├── main/                 # Main process (Electron backend)
│   │   ├── main.ts           # Main process entry file (Electron app lifecycle)
│   │   ├── preload.ts        # Preload script for security (contextBridge, etc.)
│   │   ├── ipcHandlers/      # Custom IPC handlers
│   │   │   └── dbHandler.ts  # Example: handling SQLite DB requests
│   │   └── electron.ts       # Electron initialization code
│   │
│   └── renderer/             # Renderer process (React app)
│       ├── components/       # React components
│       ├── redux/            # Redux slices and store configuration
│       │   └── store.ts      # Redux store setup
│       ├── pages/            # React pages (e.g. Dashboard, CaseDetails)
│       ├── utils/            # Utility functions (e.g., localization, date formatting)
│       ├── types/            # TypeScript types and interfaces
│       ├── App.tsx           # Main React App component
│       ├── main.tsx          # React entry point
│       ├── index.css         # Global styles (ChakraUI integration)
│       └── vite-env.d.ts     # TypeScript Vite environment types
│
├── .eslintrc.js              # ESLint configuration (optional)
├── .prettierrc               # Prettier configuration (optional)
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
├── package.json              # Dependencies and scripts
└── electron-builder.config.js # Electron-builder configuration (for packaging)
