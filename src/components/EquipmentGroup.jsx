import React from 'react'
import { CgGym } from 'react-icons/cg'

const equipmantGroupList = [
  'assisted',
  'band',
  'barbell',
  'body weight',
  'bosu ball',
  'cable',
  'dumbbell',
  'elliptical machine',
  'ez barbell',
  'hammer',
  'kettlebell',
  'leverage machine',
  'medicine ball',
  'olympic barbell',
  'resistance band',
  'roller',
  'rope',
  'skierg machine',
  'sled machine',
  'smith machine',
  'stability ball',
  'stationary bike',
  'stepmill machine',
  'tire',
  'trap bar',
  'upper body ergometer',
  'weighted',
  'wheel roller',
]

const EquipmentGroup = ({ setEquipmant }) => {
  const handleEquipmant = (e) => {
    setEquipmant(e.target.value)
  }

  return (
    <div className="mx-auto flex w-96 justify-between gap-5 rounded-lg bg-slate-600 p-6 px-8 shadow-md">
      <h1 className="flex items-center gap-2">
        <CgGym className="text-5xl" /> Ekipman
      </h1>
      <select
        onChange={handleEquipmant}
        className="rounded-lg bg-slate-200 p-1 uppercase text-black truncate">
        {equipmantGroupList.map((item) => (
          <option className="">{item}</option>
        ))}
      </select>
    </div>
  )
}

export default EquipmentGroup
