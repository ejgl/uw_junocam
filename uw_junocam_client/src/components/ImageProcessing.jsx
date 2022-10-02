import { capture } from "../apiClient"
import { useForm } from "react-hook-form"

function ImageProcessing({ processingType }) {

    const {register, handleSubmit, errors} = useForm()
    

    const onSubmit = (data) => {
        data.exp_type = exposureType
        data.img_type = imageType
        data.fil_type = filterType

        const message = capture(data)
        console.log(message)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='exposure-controls'>
            
            <legend>
                Exposure Controls
            </legend>
            
            {processingType !== 'Single'
            && <label> 
                <input type='text' {...register('exp_time', { required: true })}/>
                </label>
            }
            {processingType === 'RGB'
            && <label> Number of Exposures
                <input type='text' {...register('exp_num', { required: false })}/>
                </label>
            }
            <button type='submit'>Get Exposure</button>

            
        </form>
    )


  }
  
  
  
  
  export default ImageProcessing;