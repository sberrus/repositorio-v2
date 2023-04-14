// imports
import React from 'react'

// styles
import style from './container.module.scss'

const Container = ({ children }: { children: JSX.Element | JSX.Element[] | string }) => {
  return <div className={style.container}>{children}</div>
}

export default Container
