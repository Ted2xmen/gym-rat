import React from 'react'
import { ItemListCard } from './ItemListCard'


const ItemList = ({data, itemLength}) => {
  return (
    <div className="mx-auto  p-4">
        {itemLength}
      <ul className="grid grid-cols-4 gap-3 space-y-4 ">
        {data.slice(0, itemLength).map((item) => (
          <ItemListCard item={item} />
        ))}
      </ul>
    </div>
  )
}

export default ItemList