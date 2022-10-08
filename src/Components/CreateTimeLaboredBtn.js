import React, {useContext} from 'react';
import GlobalContext from '../Context/GlobalContext'

export default function CreateTimeLaboredBtn() {

  const {setShowTLForm} = useContext(GlobalContext);

  return (
    <button className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl">
      <span className="pl-3 pr-7" onClick={() => setShowTLForm(true)}>Create</span>
    </button>
  )
}
