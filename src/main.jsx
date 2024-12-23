import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SignInPage from './auth/sign-in/index.jsx'
import { RouterProvider ,createBrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'
import App from './App.jsx'
import Home from './home/index.jsx'
import Dashboard from './dashboard/index.jsx'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const router =createBrowserRouter([
  {
   
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>

      }
    ]
  },

  {
    path:'/auth/sign-in',
    element:<SignInPage/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>

<ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">

<RouterProvider router={router} />
    </ClerkProvider>

  </StrictMode>,
)
