import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

// withRouter убрали в react-router-dom v6+.
// Этот HOC даёт class-компонентам доступ к params / navigate / location.
export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams()

    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
        match={{ params }}
        location={location}
        navigate={navigate}
      />
    )
  }

  return ComponentWithRouterProp
}
