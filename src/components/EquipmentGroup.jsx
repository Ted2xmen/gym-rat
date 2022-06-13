import React from 'react'

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

const EquipmentGroup = () => {
  return (
    <div className="mx-auto flex justify-end justify-items-end gap-5 px-8">
      <h1 className="text-2xl">Kas Grupları 💪</h1>
      <select className=" rounded-lg bg-slate-200 p-2 text-black">
        {equipmantGroupList.map((item) => (
          <option className="normal-case">{item} </option>
        ))}
      </select>
    </div>
  )
}

export default EquipmentGroup
