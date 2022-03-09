import Terminal from "./components/Terminal";

export default function Terms() {
  
    return (
     
        <main className="max-h-[41rem] rounded-xl shadow-2xl bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg flex flex-col max-w-3xl font-bold">
        <div className=' pt-2 pb-2 pl-3 rounded-t-xl w-full bg-topba h-6 flex items-center'>
          <div className=' bg-mxim mr-2 rounded-full w-4 h-4'></div>
          <div className=' bg-minm mr-2 rounded-full w-4 h-4'></div>
          <div className=' bg-clcs rounded-full w-4 h-4'></div>
        </div>
        <div className='pr-4 pl-4'>
          <h1>
            yajushvyas:$ <span className=" text-txtc">type help to start</span>
          </h1>
          <p>
            Visit{" "}
            <a href="https://discord.com/invite/bVxCeh9WDA" target="_blank" rel="noreferrer">
              my bababoi server
            </a>
          </p>
         <Terminal/>
        </div>
        </main>
    );
  }
  