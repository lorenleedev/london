import {useState} from "react";

interface UseToggle {
  isToggleOn: boolean;
  handleToggle: () => void;
}

const useToggle = (): UseToggle => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  return {
    handleToggle: () => setIsToggleOn(!isToggleOn),
    isToggleOn
  }
}

export default useToggle;