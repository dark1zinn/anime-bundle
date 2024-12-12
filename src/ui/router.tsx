
// router config
import { createBrowserRouter } from 'react-router-dom'

// pages
import Home from './routes/Home.tsx'
import About from './routes/About.tsx'
import ErrorPage from './routes/ErrorPage.tsx'
import SearchPage from './routes/SearchPage.tsx'
import AnimeProfile from './routes/AnimeProfile.tsx'
import App from './App.tsx'
import ForgottenRoute from './routes/ForgottenRoute.tsx'
import Development from './routes/Development.tsx'
import Profile from './routes/Profile.tsx'
import Settings from './routes/Settings.tsx'
import Stats from './routes/Stats.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //errorElement: <ErrorPage />,   // disabled due interfering on initial app load when packaged
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: 'search',
        element: <SearchPage />
      },
      {
        path: '/anime/:name',
        element: <AnimeProfile />
      },
    ],
  },
  {
    path: '/profile',
    element: <Profile />,
    children: [
      {
        path: 'settings',
        element: <Settings />
      },
      {
        path: 'stats',
        element: <Stats />
      }
    ]
  },
  {
    path: '/error',
    element: <ErrorPage />
  },
  {
    path: '/dev',
    element: <Development />
  },
  {
    path: '*',
    element: <ForgottenRoute />
  }
]);

export default router