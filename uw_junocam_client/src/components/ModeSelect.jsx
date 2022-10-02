function ModeSelect({processingType, setProcessingType}) {
    
    function GetModeSelect(e) {
        setExposureType(e.target.value)
    }

    return (
      <fieldset> 
          <legend>
              Processing Mode
          </legend>
          <label> Single
              <input type='radio' name='ImageType' onChange={GetModeSelect} value='Single' 
              checked={
                processingType === 'Single'
              }/>
          </label>
          <label> RGB
              <input type='radio' name='ImageType' onChange={GetModeSelect} value='RGB'
              checked={
                exposureType === 'RGB'
              }/>
          </label>
          
      </fieldset>
    );
  }
  
  
  
  export default ModeSelect;