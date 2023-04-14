// imports
import React from 'react'

// styles
import style from './container.module.scss'

const Container = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <div className={style.container}>{children}</div>
}

export default Container
