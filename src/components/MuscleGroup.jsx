import React from 'react'

const muscleGroupList = [
  'abductors',
  'abs',
  'adductors',
  'biceps',
  'calves',
  'cardiovascular system',
  'delts',
  'forearms',
  'glutes',
  'hamstrings',
  'lats',
  'levator scapulae',
  'pectorals',
  'quads',
  'serratus anterior',
  'spine',
  'traps',
  'triceps',
  'upper back',
]

const MuscleGroup = () => {
  return (
    <div className="flex mx-auto justify-end px-8 justify-items-end gap-5">
      <h1 className="text-2xl">Kas Grupları 💪</h1>
      <select className=" rounded-lg bg-slate-200 text-black p-2">
        {muscleGroupList.map((item) => (
          <option className="normal-case">{item} </option>
        ))}
      </select>
    </div>
  )
}

export default MuscleGroup
