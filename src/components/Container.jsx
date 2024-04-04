import React from 'react'

const Container = ({children,designs}) => {
  return (
    <div className= {`${designs} max-w-[768px] p-5 mx-auto`}>
      {children}
    </div>
  )
}

export default Container
