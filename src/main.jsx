import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './Layout/RootLayout'
import HomePage from './pages/homePage/HomePage'
import Apps from './pages/apps/Apps'
import Installation from './pages/installation/Installation'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'

const router = createBrowserRouter([{
    path:"/",
    Component: RootLayout,
    children:[
      {
        index: true,
        Component: HomePage
      },
      {
        path: "/app",
        Component: Apps
      },
      {
        path: "/installation",
        Component: Installation
      }
    ],
    errorElement:<NotFoundPage></NotFoundPage>
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
