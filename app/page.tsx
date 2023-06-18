'use client'

import './index.scss'
import DropDown from '@/components/ui-elements/DropDown'

type Item = {
  name: string
}

export default function Index({}: {}) {
  const items: Item[] = [
    { name: 'Gena' },
    { name: 'Gena' },
    { name: 'Gena' },
    { name: 'Gena' },
    { name: 'Gena' },
    { name: 'Gena' },
    { name: 'Gena' }
  ]

  return (
    <main className="index-page">
      <div className="main-wrapper">
        <DropDown label="label">
          {items.map((item: Item) => (
            <span key={items.indexOf(item)}>{item.name}</span>
          ))}
        </DropDown>
      </div>
    </main>
  )
}
