import React from 'react'

const ReactContext = React.createContext({
  isActiveTab: 'About',
  isContact: false,
  onChangeActiveTab: () => {},
  onContact: () => {},
})

export default ReactContext
