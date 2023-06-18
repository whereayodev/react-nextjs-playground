import React, { LegacyRef, ReactNode, Ref, useRef, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useClickAway } from 'react-use'
import './drop-down.scss'

type Props = {
  label: string
  children: ReactNode
}

const DropDown: React.FC<Props> = ({ label, children }) => {
  const [isOpened, updateIsOpened] = useState(false)

  const root: LegacyRef<HTMLDivElement> | undefined = useRef(null)
  const child: LegacyRef<HTMLDivElement> | undefined = useRef(null)

  useClickAway(root, () => {
    if (isOpened) updateIsOpened(false)
  })

  const handleUpdate = () => {
    updateIsOpened(!isOpened)
  }

  return (
    <div ref={root} onClick={handleUpdate} className="dropdown-root top dark-theme">
      <span>{label}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m6 9l6 6l6-6"
        ></path>
      </svg>
      <CSSTransition nodeRef={child} in={isOpened} timeout={200} classNames="my-node">
        {isOpened ? (
          <div ref={child} className="list-group">
            {children}
          </div>
        ) : (
          <></>
        )}
      </CSSTransition>
    </div>
  )
}

export default DropDown
