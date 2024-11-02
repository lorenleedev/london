import {useState} from "react";

interface UseToggle {
  isToggleOn: boolean;
  handleToggle: () => void;
}

const useToggle = (initialState: boolean = false): UseToggle => {
  const [isToggleOn, setIsToggleOn] = useState(initialState);

  return {
    handleToggle: () => setIsToggleOn(!isToggleOn),
    isToggleOn
  }
}

export default useToggle;