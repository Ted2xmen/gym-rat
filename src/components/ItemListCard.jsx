import React from 'react'

export const ItemListCard = ({ item }) => {
  return (
    <li class="m-2 overflow-hidden rounded-lg  shadow-xl border-0  border-l ">
      <img
        className="rounded-xl object-cover p-2 opacity-75 transition hover:scale-110 hover:opacity-100"
        src={item.gifUrl}
        alt={item.name}
      />

      <div class="p-6">
        <h5 class="truncate text-md font-bold uppercase text-slate-300">
          {item.name}
        </h5>
        <div className="space-y-2 space-x-3 pt-4">
          <span className="rounded-lg border-2 border-black bg-green-600 p-1 text-sm font-semibold">
            {item.target}
          </span>

          <span className="rounded-lg border-2 border-black bg-rose-600 p-1 text-sm font-semibold">
            {item.bodyPart}
          </span>

          <span className="rounded-lg  bg-orange-600 p-1 text-sm font-semibold">
            {item.equipment}
          </span>
        </div>
   
      </div>
    </li>
  )
}
