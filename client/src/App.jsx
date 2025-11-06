import { router } from './router'
import { RouterProvider } from 'react-router/dom'
import ErrorBoundary from './components/common/ErrorBoundary'
function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  )
}

export default App
