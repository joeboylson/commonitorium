import { useCallback, useState } from "react";

export const useTogglable = (defaultValue: boolean = false) => {
  const [active, setActive] = useState<boolean>(defaultValue);

  const toggle = useCallback(() => setActive(!active), [active]);

  const deactivate = useCallback(() => setActive(false), []);
  const activate = useCallback(() => setActive(true), []);

  return { active, setActive, toggle, deactivate, activate };
};
