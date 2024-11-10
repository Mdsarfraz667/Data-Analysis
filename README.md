# Frontend Data Analysis

This project is a data analysis tool built with React and Vite. It aggregates and visualizes crop production data, displaying it in two interactive tables. The first table shows the data aggregated by year, and the second table shows the data aggregated by crop name over a period from 1950 to 2020.

## Features

- Aggregates crop production data by year.
- Displays the crop with maximum and minimum production for each year.
- Aggregates crop yield and cultivation area by crop name.
- Interactive tables with hover effects.
- Responsive and user-friendly UI using Mantine UI components.

## Technologies Used

- React
- Vite
- TypeScript
- Mantine (for UI components)

## Project Setup

### Prerequisites

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v16 or higher)
- [npm](https://www.npmjs.com/get-npm) (Node package manager)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Mdsarfraz667/Data-Analysis
   ```

2. Navigate into the project directory:

   ```bash
   cd frontend-data-analysis
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

This will start the Vite development server and open the project at [http://localhost:5173](http://localhost:5173).

### Build for Production

To build the project for production, run:

```bash
npm run build
```

This will bundle your project and output the static files into the `dist` directory.

### Folder Structure

```bash
frontend-data-analysis/
├── public/
│   ├── vite.svg
│   └── screenshots/
│       ├── Screenshot616.png
│       ├── Screenshot617.png
│       ├── Screenshot618.png
│       ├── Screenshot619.png
│       └── Screenshot620.png
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── CropTable.tsx
│   │
│   └── utilities/
│       ├── data.ts
│       ├── helper.ts
│       └── aggegrateFuncion/
│           ├── aggregateDataByCrop.tsx
│           └── aggregateDateByYear.tsx
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Screenshots

### Table 1: Data by Year

This table displays crop production data aggregated by year, showing the crop with maximum and minimum production for each year.

### Part 1 of Table 1:

<img src="public\screenshots\Screenshot616.png" width="500" height="350" />

### Part 2 of Table 1:

<img src="public\screenshots\Screenshot617.png" width="500" height="350" />

### Part 3 of Table 1:

<img src="public\screenshots\Screenshot618.png" width="500" height="350" />

### Part 4 of Table 1:

<img src="public\screenshots\Screenshot619.png" width="500" height="350" />

### Part 5 of Table 1:

<img src="public\screenshots\Screenshot620.png" width="500" height="350" />

### Table 2: Data by Crop Name (1950-2020)

This table shows the average yield and cultivation area for each crop from 1950 to 2020.

<img src="public\screenshots\Screenshot621.png" width="500" height="350" />

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
