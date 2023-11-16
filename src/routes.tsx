import { ReactNode } from 'react';
import { HomePage } from './pages/home-page.tsx';
import { PlaygroundPage } from './pages/playground-page.tsx';

import { AdventOfCodePractice } from './practice/advent-of-code/advent-of-code-practice.tsx';
import { FizzBuzzPractice } from './practice/fizz-buzz/fizz-buzz-practice.tsx';
import { RickRollerPractice } from './practice/rick-roller/rick-roller-practice.tsx';
import { StopwatchPractice } from './practice/stopwatch/stopwatch-practice.tsx';
import { UseFrozenStatePractice } from './practice/use-frozen-state/use-frozen-state-practice.tsx';
import { WeatherPractice } from './practice/weather/weather-practice.tsx';
import { WordProcessorPractice } from './practice/word-processor/word-processor-practice.tsx';

import { PlanetsDemo } from './demos/planets/planets-demo.tsx';


export interface RouteInfo {
  path: string;
  element: ReactNode;
  title: string;
}

export const demoRoutes: { [key: string]: RouteInfo } = {
  Planets: {
    path: '/demo/planets',
    element: <PlanetsDemo />,
    title: 'Planets',
  },
};

export const practiceRoutes: { [key: string]: RouteInfo } = {
  WeatherPractice: {
    path: '/practice/weather',
    element: <WeatherPractice />,
    title: 'Weather',
  },
  StopwatchPractice: {
    path: '/practice/stopwatch',
    element: <StopwatchPractice />,
    title: 'Stopwatch',
  },
  FizzBuzzPractice: {
    path: '/practice/fizzbuzz',
    element: <FizzBuzzPractice />,
    title: 'Fizz buzz',
  },
  VideoPlayerPractice: {
    path: '/practice/rick-roller',
    element: <RickRollerPractice />,
    title: 'Rick Roller',
  },
  WordProcessorPractice: {
    path: '/practice/word-processor',
    element: <WordProcessorPractice />,
    title: 'Word Processor',
  },
  UseFrozenStatePractice: {
    path: '/practice/use-frozen-state',
    element: <UseFrozenStatePractice />,
    title: 'Frozen State',
  },
  AdventOfCodePractice: {
    path: '/practice/advent-of-code',
    element: <AdventOfCodePractice />,
    title: 'Advent of Code',
  },
};

export const routes = {
  ...practiceRoutes,
  ...demoRoutes,
  Home: {
    path: '/',
    element: <HomePage />,
    name: 'Home',
  },
  Playground: {
    path: '/playground',
    element: <PlaygroundPage />,
    name: 'Playground',
  },
};
