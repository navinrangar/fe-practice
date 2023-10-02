import { useState } from "react"

export const useForm = (initialValue : {[key: string] : string}) => {
    const [value, setValue] = useState(initialValue)

    const setForm = (e: any) : void => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    return {value, setForm}

}