import { Dispatch, RefObject, SetStateAction, useEffect, useState } from "react";

interface useCloseOnClickOutsideReturnType extends Array<boolean | Dispatch<SetStateAction<boolean>>> {
    0: boolean;
    1: Dispatch<SetStateAction<boolean>>;
  }

const useCloseOnClickOutside = (ref:RefObject<any>): useCloseOnClickOutsideReturnType => {
  const [ isActive, setIsActive ] = useState<boolean>(false);

  useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setIsActive(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };

  }, [ref]);

  return [ isActive, setIsActive ];
}

export default useCloseOnClickOutside;