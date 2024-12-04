
// router config
import { createBrowserRouter } from 'react-router-dom'

// pages
import Home from './routes/Home.tsx'
import About from './routes/About.tsx'
import ErrorPage from './routes/ErrorPage.tsx'
import SearchPage from './routes/SearchPage.tsx'
import MediaProfile from './routes/MediaProfile.tsx'
import App from './App.tsx'

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
        path: 'animes',
        element: <SearchPage />
      },
      {
        path: 'animes/:name',
        element: <MediaProfile />
      },
    ],
  },
  {
    path: '/error',
    element: <ErrorPage />
  },
  {
    path: '*',
    element: <App />
  }
]);

export default router