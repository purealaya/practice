import "./App.css";

import DropFileInput from './components/drop-file-input/DropFileinput';


function App() {
  // const onFileChange = (files) => {
  //   console.log(files);
  // }
  return (
    <div className="box">
      <h2 className="header">
        React drag files input
      </h2>
       <DropFileInput />
       {/* onFileChange={(files) => {onFileChange(files)}} */}
    </div>
  );
}

export default App;
