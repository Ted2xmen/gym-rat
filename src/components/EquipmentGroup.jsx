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
    <div className="mx-auto flex  gap-5 px-4">
      <h1 className="flex items-center gap-2">
        <CgGym className="text-5xl" /> Ekipman
      </h1>
      <select onChange={handleEquipmant} className="rounded-lg bg-slate-200 p-1 text-black">
        {equipmantGroupList.map((item) => (
          <option className="normal-case">{item} </option>
        ))}
      </select>
    </div>
  )
}

export default EquipmentGroup
