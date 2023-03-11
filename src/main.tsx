import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register';
import Dashboard from './pages/dashboard/Dashboard';
import DashboardElements from './pages/dashboardElements/DashboardElements';
import CatFactsPage from './pages/catFactsPage/CatFactsPage';
import CompoundInterestCalculatorPage from './pages/compoundInterestCalculatorPage/CompoundInterestCalculatorPage';

import 'antd/dist/reset.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<DashboardElements />} />
          <Route path="/dashboard/interest-calculator" element={<CompoundInterestCalculatorPage />} />
          <Route path="/dashboard/cat-facts" element={<CatFactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
