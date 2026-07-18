import { RouteObject } from 'react-router-dom';

import LuxeIgnitePage from './pages/luxe-ignite';
import Cognitive0CreationsPage from './pages/cognitive0creations';
import MindBloomPage from './pages/mindbloom';
import EventsCalendarPage from './pages/events-calendar';
import ProdNotFoundPage from './pages/_404';

const NotFoundPage = ProdNotFoundPage;

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <LuxeIgnitePage />,
  },
  {
    path: '/cognitive0creations',
    element: <Cognitive0CreationsPage />,
  },
  {
    path: '/mindbloom',
    element: <MindBloomPage />,
  },
  {
    path: '/events',
    element: <EventsCalendarPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export type Path = '/' | '/cognitive0creations' | '/mindbloom';
export type Params = Record<string, string | undefined>;
