import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './demo/HomePage'
import { ComponentViewer } from './demo/ComponentViewer'
import { componentRoutes } from './demo/routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components" element={<ComponentViewer routes={componentRoutes} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
