import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void// need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyDown} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''// need to fix with (?:)

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyDown={onKeyDown}
            />
            <span className={s.errorMessage}>{error}</span>
            <button className={s.button} onClick={addUser} disabled={!name}>add</button>
            <span className={s.counter}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
