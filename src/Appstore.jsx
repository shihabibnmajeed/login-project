import create from 'zustand'
import {persist} from "zustand/middleware";

let Appstore=(set) => ({
    dopen:true,
    updateOpen:(dopen)=> set((state)=>({dopen:dopen})),
});
Appstore=persist (Appstore,{name:"my_App_store"});
export const useAppstore = create(Appstore);