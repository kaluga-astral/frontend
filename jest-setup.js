require('@testing-library/jest-dom');
const ResizeObserverModule = require('resize-observer-polyfill');

global.ResizeObserver = ResizeObserverModule;
