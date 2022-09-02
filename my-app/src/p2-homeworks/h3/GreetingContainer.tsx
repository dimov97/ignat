import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string | null>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let trimmedName = e.currentTarget.value.trim()
        if (trimmedName) {
            setName(trimmedName)
            setError('')
        } else {
            setName('')
            setError('name is required !')
        }
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser()
        }
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name}!`)
        setName('')// need to fix
    }


    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyDown={onKeyDownHandler}
        />
    )
}

export default GreetingContainer
