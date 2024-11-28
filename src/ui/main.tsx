import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// router config
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// pages
import Home from './routes/Home.tsx'
import About from './routes/About.tsx'
import ErrorPage from './routes/ErrorPage.tsx'
import Animes from './routes/Animes.tsx'
import MediaProfile from './routes/MediaProfile.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
        element: <Animes />
      },
      {
        path: 'animes/:name',
        element: <MediaProfile />
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router  } />
  </StrictMode>,
)
