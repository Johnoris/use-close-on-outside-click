import { Dispatch, RefObject, SetStateAction, useEffect, useState } from "react";

interface useCloseOnClickOutsideReturnType extends Array<boolean | Dispatch<SetStateAction<boolean>>> {
    0: boolean;
    1: Dispatch<SetStateAction<boolean>>;
  }

const useCloseOnClickOutside = (ref:RefObject<any>, target?: string): useCloseOnClickOutsideReturnType => {
  const [ isActive, setIsActive ] = useState<boolean>(false);

  const logAndSwitchToDocument = () => {
    console.warn('use-close-on-external-click: switching to the document target; no target specified')
    return document
  }

  useEffect(() => {
      const handleClickOutside:EventListener = (event) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setIsActive(false);
        }
      };
      const targetElement = target ? document.querySelector(target) : logAndSwitchToDocument()
      if(targetElement){
        targetElement.addEventListener('mousedown', handleClickOutside) 
      }
      else{
        console.warn('use-close-on-external-click: switching to the document target; sepecified target is invalid')
        document.addEventListener('mousedown', handleClickOutside)
      }
      return () => {
        if(targetElement){
          targetElement.removeEventListener('mousedown', handleClickOutside)
        }
        else{
          document.removeEventListener('mousedown', handleClickOutside)
        }
      };

  }, [ref]);

  return [ isActive, setIsActive ];
}

export default useCloseOnClickOutside;