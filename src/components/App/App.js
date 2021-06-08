import React, { useState } from 'react';

import Checkbox from '../Checkbox'

const App = () => {

  const [test, setTest] = useState(false)

  const handleChange = () => {
    console.log('test')
  }
  return (
    <div>
      <Checkbox
        id={1}
        label={"test"}
        condition={test}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  )
}

export default App
