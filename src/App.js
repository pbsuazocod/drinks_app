import './App.css';

function App() {
  return (
    <div className="h-screen w-screen bg-gray-300 flex items-center flex-col">
      <div className='bg-gray-600 h-full w-full justify-between flex flex-col items-center lg:max-w-[50%] pt-[2%]'>
       <div className='flex  w-full'>
   
        <div className=' h-[100px] w-[100px] flex flex-col justify-center items-center rounded-full bg-red-300'>
        Logo
        </div>
        <div className=' h-[100px] w-[100px] flex flex-col justify-center items-center rounded-full bg-red-300'>
        Sound
        </div>
       </div>
        <div className='bg-gray-200 w-1/2 h-1/2'>
          Main Picture
        </div>
        <div className='bg-red-300 rounded-md'>
            I'm a button  
        </div>
        <div className="bg-gray-200  w-11/12  rounded-sm  ">
          Sticky footer
        </div>
      </div>

    </div>
  );
}

export default App;
