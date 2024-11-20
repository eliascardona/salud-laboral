import { create } from 'zustand'

const useStore = create(
    (set) => ({
        inputValue: 0,
        setIputValue: (newValue) =>
            set(state => ({
                inputValue: newValue
            })
        ),
    })
)


export { useStore }