import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home, Post, SignIn } from 'components'
import { ThemeProvider } from 'contexts/ThemeContext'
import { Root, ErrorPage } from 'routes'
import 'styles/input.css'
import 'styles/material-icons-config.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post/:id',
        element: <Post />,
      },
			{
				path: 'sign-in',
				element: <SignIn />
			}
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
