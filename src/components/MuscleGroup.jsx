import React from 'react'
import { GiMuscleUp } from 'react-icons/gi'

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

const MuscleGroup = ({ setMuscle }) => {
  const handleMuscle = (e) => {
    setMuscle(e.target.value)
  }

  return (
    <div className="mx-auto flex  gap-5 px-4">
      <h1 className="flex items-center gap-2">
        <GiMuscleUp className="text-5xl" /> Kas
      </h1>
      <select
        onChange={handleMuscle}
        className=" rounded-lg bg-slate-200 p-1 text-black">
        {muscleGroupList.map((item) => (
          <option className="normal-case">{item}</option>
        ))}
      </select>
    </div>
  )
}

export default MuscleGroup
