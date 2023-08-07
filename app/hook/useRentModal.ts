import{create} from "zustand"
interface RentnModalStore{
    isOpen: boolean
    onOpen:()=>void
    onClose:()=>void
}
import React from 'react';

const useRentModal = create<RentnModalStore>((set)=>({
 isOpen:false,
 onOpen:()=>set({isOpen:true}),
 onClose:()=>set({isOpen:false})
}));

export default useRentModal;