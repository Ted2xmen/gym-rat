import React from 'react'
import EquipmentGroup from './EquipmentGroup'
import MuscleGroup from './MuscleGroup'
import BodyGroup from './BodyGroup'

const SettingsMenu = ({ setMuscle, setEquipmant, setBody }) => {
  return (
    <div  className="grid grid-cols-1 items-center justify-center gap-2  md:grid-cols-1 lg:grid-cols-3">
      <BodyGroup setBody={setBody} />
      <MuscleGroup setMuscle={setMuscle} />
      <EquipmentGroup setEquipmant={setEquipmant} />
    </div>
  )
}

export default SettingsMenu
