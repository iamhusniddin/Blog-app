import { create } from 'zustand';

const useLoader = create((set)=> ({
        isLoading: false,
        startLoading: ()=> set((state) => ({isLoading: true })),
        endLoading : (payLoad)=> set(()=>{isLoading: payLoad && false})
    })
)

export default useLoader