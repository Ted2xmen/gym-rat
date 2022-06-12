import React from 'react'

export const ItemListCard = ({item}) => {
//   return (
//     <div>
//       <li className="items-center justify-center rounded-md bg-slate-200">
//         <span className="text-md font-bold uppercase">{item.name}</span>
//         <img className="w-56 rounded-xl" src={item.gifUrl} alt={item.name} />
//         <div className="">
//           <p> Hedef Kas Grubu : {item.target} </p>
//           <p> Ekipman : {item.equipment} </p>
//         </div>
//       </li>
//     </div>

return (
  <div class="block overflow-hidden rounded-lg border border-gray-100 shadow-sm">
    <img className="w-56 rounded-xl" src={item.gifUrl} alt={item.name} />

    <div class="p-6">
      <h5 class="text-xl font-bold uppercase">{item.name} </h5>


        <p> Hedef Kas Grubu : {item.target} </p>
        <p> Ekipman : {item.equipment} </p>
      

      <div class="mt-4 inline-block border-b border-blue-500 pb-1 font-medium text-blue-600 ">
        Find out more
        <span aria-hidden="true">&rarr;</span>
      </div>
    </div>
  </div>
)
  
}
