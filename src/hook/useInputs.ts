import { useState, useCallback } from 'react'

function useInputs<T, U, P>(initialValue: T): [T, (name: U, value: P) => void, () => void]{
    const [ form, setForm ] = useState(initialValue)
    const onChange = useCallback((name, value) => {
        setForm(form => ({ ...form, [name]: value }))
    }, [])
    const reset = useCallback(() => setForm(initialValue), [initialValue])
    return [ form, onChange, reset ]
}

export default useInputs