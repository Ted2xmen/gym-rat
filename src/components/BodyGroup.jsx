import React from 'react'
import { IoBodyOutline } from 'react-icons/io5'

const bodyGroupList = [
  'back',
  'cardio',
  'chest',
  'lower arms',
  'lower legs',
  'neck',
  'shoulders',
  'upper arms',
  'upper legs',
  'waist',
]

const BodyGroup = ({ setBody }) => {
  const handleBody = (e) => {
    setBody(e.target.value)
  }

  return (
    <div className="mx-auto flex w-96 justify-between gap-5 rounded-lg bg-slate-400 p-6 px-8 shadow-md">
      <h1 className="flex items-center gap-2">
        <IoBodyOutline className="text-5xl" /> Bölge
      </h1>
      <select
        onChange={handleBody}
        className="truncate rounded-lg bg-slate-200 p-1 uppercase text-black">
        {bodyGroupList.map((item) => (
          <option key={item} className="normal-case">{item}</option>
        ))}
      </select>
    </div>
  )
}

export default BodyGroup
