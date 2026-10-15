//npm install react-router @tanstack/react-query 
import { useState } from 'react'
import './App.css'
import { RouterProvider} from 'react-router';
import  router  from './Routers/main_R.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

function App() {

  return (
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
  )
}

export default App
