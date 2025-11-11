import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from '@/components/ui/sonner' // <-- 1. TAMBAHKAN BARIS INI

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Toaster richColors /> {/* <-- 2. TAMBAHKAN BARIS INI */}
  </React.StrictMode>,
)