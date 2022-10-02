import './App.css';
import { useState } from 'react';
import QueryInput from './components/QueryInput';
import ModeSelect from './components/ModeSelect';
import ImageProcessing from './components/ImageProcessing';

function App() {
  const [processingType, setProcessingType] = useState('Single')

  return (
    <div className="App"> UW Huskies JunoCam Image Processing WebApp
    <fieldset>
      <QueryInput/>
      <ModeSelect processingType={processingType} setProcessingType={setProcessingType}/>
      <ImageProcessing processingType={processingType}/>
    </fieldset>
    </div>
  );
}

export default App;
