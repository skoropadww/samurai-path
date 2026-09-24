import React from 'react'
import s from './Preloader.module.css'

const Preloader = () => {
  return (
    <div className={s.preloader}>
      <div className={s.loader}>
        <div className={s.orbit}></div>
        <div className={`${s.orbit} ${s.orbitReverse}`}></div>
        <div className={s.core}></div>
        <div className={s.glow}></div>
      </div>
      <p className={s.text}>Loading</p>
    </div>
  )
}

export default Preloader
