import React from 'react'

export const ItemListCard = ({item}) => {

return (
  <div class="block overflow-hidden  rounded-lg border border-red-200 shadow-sm">
    <img
      className="rounded-xl object-cover p-2 hover:scale-110 transition opacity-75 hover:opacity-100"
      src={item.gifUrl}
      alt={item.name}
    />

    <div class="p-6">
      <h5 class="truncate text-sm font-bold uppercase text-rose-500">
        {item.name}{' '}
      </h5>
      <p> Hedef Kas Grubu : {item.target} </p>
      <p> Ekipman : {item.equipment} </p>
      <div class="mt-4 inline-block border-b border-rose-500 pb-1 font-medium text-rose-600 cursor-pointer">
        Find out more
        <span aria-hidden="true">&rarr;</span>
      </div>
    </div>
  </div>
)
  
}
