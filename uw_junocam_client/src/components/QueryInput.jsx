import { useState } from "react";
import { useForm } from "react-hook-form"
import { query } from "../apiClient";

function QueryInput() {

    const {register, handleSubmit, errors} = useForm()

    const onSubmit = (data) => {
        console.log(data)
        query(data)
    }

    return (
       <form onSubmit={handleSubmit(onSubmit)}>
        <legend>
            JunoCam Query (Time-based)
        </legend>
        <label> Input Time
            <input type='text' {...register('time', {required: true})}/>
        </label>
        <label> Number of Images
            <input type='number' {...register('number_of_images', {required: true}) }/>
        </label>
        <button type='submit'>Get Images</button>
       </form>

    )


}
export default QueryInput;