import { useState } from "react";

export interface InputState {
  value: string;
  handleChange: (val: string) => void;
  handleReset: () => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const useInputState = (init?: string): InputState => {
  const initialState = init || "";

  const [value, setValue] = useState<string>(initialState);
  const handleChange = (val: string): void => setValue(val);
  const handleReset = (): void => setValue(initialState);

  return { value, handleChange, handleReset, setValue };
};

export default useInputState;
