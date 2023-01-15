import { useState } from 'react';

const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const inputValue = (event) => setValue(event.target.value);

  return [value, inputValue];
};

export default useInput;
