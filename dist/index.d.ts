import { RefObject, Dispatch, SetStateAction } from 'react';

interface useCloseOnClickOutsideReturnType extends Array<boolean | Dispatch<SetStateAction<boolean>>> {
    0: boolean;
    1: Dispatch<SetStateAction<boolean>>;
}
declare const useCloseOnClickOutside: (ref: RefObject<any>) => useCloseOnClickOutsideReturnType;

export { useCloseOnClickOutside as default };
