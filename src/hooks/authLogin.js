import {create} from 'zustand'

const useAuthLogin = create((set) => ({
    user: 'Gading',
    isLoggedIn: true,
    setUser: (value) => set({user: value}),
    setIsLoggedIn: (value) => set({isLoggedIn: value})
}))

export default useAuthLogin