// App.js
import React from 'react';
import useToggle from "./lib/useToggle";

const AppUseToggle = () => {
  const [isTextChanged, setIsTextChanged] = useToggle();

  return (
    <button onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
  );
};

export default AppUseToggle;