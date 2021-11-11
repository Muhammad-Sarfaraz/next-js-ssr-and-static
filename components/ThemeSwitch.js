import { useState } from 'react'
import DarkTheme from './darkTheme'
 
const loadDarkMode=()=>{
  if(typeof localStorage==='undefined'){
    return false;
  }
  const value=localStorage.getItem('darkMode');
  return (value===null) ? false : JSON.parse(value);
}

const ThemeSwitch = () => {
  const [mode, setMode] = useState(loadDarkMode)

  const handleClick=()=>{
    localStorage.setItem('darkMode',JSON.stringify(!mode))
    setMode(!mode)
  }

  const text = mode ? 'Light Mode' : 'Dark Mode'

  const toggle = () => {
    if (mode == true) {
      return setMode(false)
    } else {
      return setMode(true)
    }
  }
  return (
    <>
      <button
        onClick={() => {
          handleClick()
        }}
      >
        {text}
      </button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          cursor: pointer;
          color: inherit;
        }
      `}</style>

       {
           mode &&  <DarkTheme />
       }

    </>
  )
}

export default ThemeSwitch
