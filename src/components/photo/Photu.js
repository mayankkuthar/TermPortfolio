export default function Photu() {
  
    return (
     
        <main className=" h-[41rem] rounded-xl shadow-2xl bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg flex flex-col  max-w-3xl font-bold">
          <div className=' pt-2 pb-2 pl-3 rounded-t-xl w-full bg-topba bg-opacity-60 backdrop-filter backdrop-blur-lg h-6 flex items-center'>
            <div className=' bg-mxim mr-2 rounded-full w-4 h-4'></div>
            <div className=' bg-minm mr-2 rounded-full w-4 h-4'></div>
            <div className=' bg-clcs rounded-full w-4 h-4'></div>
          </div>
            <img src="/profile.JPG" className='h-full saturate-0 hover:saturate-100 duration-500 rounded-b-2xl shadow-2xl'/>
          
        </main>
    );
  }
  