# Restaurant Website Project

This project involves designing a fully functional restaurant webpage with a focus on user experience and visual appeal.
It includes sections like Home, About Us, Menu, Reservations, Team Info, Testimonials, and Contact Us.

This project has been bootstrapped with:

- Typescript
- React
- Vite
- Redux Toolkit
- React Router
- Tailwind
- MUI
- Stylelint
- Babel
- ESLint
- Prettier
- assuming `uat` branch represents staging environment, should be set as default branch
- assuming `master` branch represents production environment
- assuming app is built into `dist` folder

## Supported Node.js Version

This project requires **Node.js v20.17.0**.
Please ensure you have the correct version installed before running the project.

You can use [nvm](https://github.com/nvm-sh/nvm) to manage Node.js versions:

```sh
nvm install 20.17.0
nvm use 20.17.0
```

## Getting Started

Fork the project and run `npm install`.

### Project Layout

```

├── dist # output from compilation
├── config # public files
├── public # public files
├── src # application code
│ ├── index.html # html file
│ ├── assets # static files
│ ├── components # component files
│ └── pages # page files
│ └── hooks # general purpose hooks
│ └── mock # mock apis and data
│ └── store # application state management
│ └── routes # routes and urls
│ └── lib # utility functions and reusable modules
│ └── utils # general reusabale code
│ └── App.tsx # includes routes, providers, etc.
│ └── main.tsx # vite entry point
└── tests # tests utility and setup
└── .babelrc # compiler config
└── .eslintrc.json # code quality config
└── .prettierrc # logic formatting config
└── .stylelint # style formatting config
└── jest.config.ts # testing config
└── tsconfig.json # typescript config file
└── vite.config.ts # vite configuration
└── vitest.config.ts # vitest configuration

```

### Development

To start the project in `development` mode, run `npm run dev`.

The project runs on port `3000` by default, but this can be changed in `./vite.config.ts`.

### Building

To build the project in `prodction` mode `npm run build`.

### IDE Configuration

The suggested IDE for this project is VSCode.

Install these extension for code-completion and linting in the IDE:

- **ESLint** (by Microsoft) to enforce **Code Quality Rules**
- **Prettier** (by Prettier) to enforce **JS/TS Formatting Rules**
- **Tailwind CSS IntelliSense** (by Tailwind) for **CSS tooling**

```

```
