// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import { createRoot } from 'react-dom/client';
import Routes from "./routes/Routes";
import { RobotProvider } from './context/RobotContext';

function Aplication() {
    return (<RobotProvider> <Routes /> </RobotProvider>);
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Aplication />)