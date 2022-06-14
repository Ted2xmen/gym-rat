import React from 'react'

export const ItemListCard = ({ item }) => {
  return (
    <li class=" m-2  overflow-hidden rounded-lg border border-red-200 shadow-lg">
      <img
        className="rounded-xl object-cover p-2 opacity-75 transition hover:scale-110 hover:opacity-100"
        src={item.gifUrl}
        alt={item.name}
      />

      <div class="p-6">
        <h5 class="truncate text-sm font-bold uppercase text-rose-500">
          {item.name}
        </h5>
        <p>
          Hedef Kas Grubu :
          <span className="rounded-lg bg-green-400 p-1 text-sm font-semibold">
            {item.target}
          </span>
        </p>
        <p>
          Ekipman :
          <span className="rounded-lg bg-orange-400 p-1 text-sm font-semibold">
            {item.equipment}
          </span>
        </p>
        <div class="mt-4 inline-block  cursor-pointer pb-1 font-medium text-rose-600">
          Find out more
          <span aria-hidden="true">&rarr;</span>
        </div>
      </div>
    </li>
  )
}
