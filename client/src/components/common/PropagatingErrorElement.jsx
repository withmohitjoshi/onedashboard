import { useRouteError } from 'react-router-dom'

const PropagatingErrorElement = () => {
  const error = useRouteError()
  throw error
}
export default PropagatingErrorElement
