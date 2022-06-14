import React from 'react'
import EquipmentGroup from './EquipmentGroup'
import MuscleGroup from './MuscleGroup'

const SettingsMenu = ({ setMuscle, setEquipmant }) => {
  return (
    <div className="flex flex-wrap items-center justify-center space-y-4">
      <MuscleGroup setMuscle={setMuscle} />
      <EquipmentGroup setEquipmant={setEquipmant} />
    </div>
  )
}

export default SettingsMenu