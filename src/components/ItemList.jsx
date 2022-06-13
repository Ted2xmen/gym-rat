import React from 'react'
import { ItemListCard } from './ItemListCard'


const ItemList = ({data, itemLength}) => {
  return (
    <div className="mx-auto  p-4">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 space-y-4 ">
        {data.slice(0, itemLength).map((item) => (
          <ItemListCard item={item} />
        ))}
      </ul>
    </div>
  )
}

export default ItemList