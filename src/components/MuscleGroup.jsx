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
    <select className='bg-black p-3 outline-orange-400 uppercase'>
        {muscleGroupList.map((item) => (
         <option>{item} </option>
        ))}
    </select>
  )
}

export default MuscleGroup
