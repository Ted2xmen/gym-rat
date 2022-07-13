import React from 'react'
import { ItemListCard } from './ItemListCard'

const ItemList = ({ data }) => {

  return (
    <div className="mx-auto items-center justify-center p-10">
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 ">
        {data.slice(0, 30).map((item, i) => (
          <ItemListCard key={i} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default ItemList
