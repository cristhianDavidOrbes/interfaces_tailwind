import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-screen  h-screen justify-center items-center bg-slate-200 w-min-[500]">
      <main className="flex flex-col  w-4/12 bg-white p-8 rounded-xl w-min-[500]">
        
        <span >
          <h1 className="font-medium font-sans text-2xl">Appearance</h1>
          <p className="text-gray-400 text-sm">set or customize your preferences for the system </p>
          <section className="w-12/12 h-1 h-max-[1] bg-slate-300 items-center mt-2 mb-2"></section>
        </span>

        <section className="flex flex-row items-center">
          <span className="">
            <h1 className="font-medium font-sans text-xl">Languaje</h1>
            <p className="text-gray-400 text-sm">Select the languaje of the platform </p>
          </span>
          <span className="p-2 ml-16 bg-white h-10 w-3/6 border-gray-200 border-2 rounded-lg">
            English 
          </span>
        </section>
        <section className="w-12/12 h-1 h-max-[1] bg-slate-300 items-center mt-2 mb-2"></section>

        <section className="flex flex-col justify-center">
          <span className="">
            <h1 className="font-medium font-sans text-xl">Languaje</h1>
            <p className="text-gray-400 text-sm ">Select the languaje of the platform </p>
          </span>

        <section className="flex flex-row gap-4 justify-center ">
          <section className="flex-col justify-center gap-3 p-2">
            <Image src='/auto.png' width={100} height={100} alt="auto" className="rounded-lg"></Image>
            <p className="text-center font-mono text-sm">Auto</p>
          </section>
          <section className="flex-col justify-center gap-3 p-2">
            <Image src='/light.png' width={100} height={100} alt="auto" className="rounded-lg"></Image>
            <p className="text-center font-mono text-sm">light</p>
          </section>
          <section className="flex-col justify-center gap-3 p-2">
            <Image src='/Dark.png' width={100} height={100} alt="auto" className="rounded-lg"></Image>
            <p className="text-center font-mono text-sm">light</p>
          </section>


        </section>

        </section>
        <section className="w-12/12 h-1 h-max-[1] bg-slate-300 items-center mt-2 mb-2"></section>
    
        <section className="flex flex-row items-center">
          <span className="flex-1">
            <h1 className="font-medium font-sans text-xl">Languaje</h1>
            <p className="text-gray-400 ">Select the languaje of the platform </p>
          </span>
          <span className="p-2 ml-16 bg-red-500 h-1 w-4  rounded-full"></span>
          <span className="p-2 ml-3 bg-yellow-300 h-1 w-4  rounded-full"></span>
          <span className="p-2 ml-3 bg-green-400 h-1 w-4  rounded-full"></span>
          <span className="p-2 ml-3 bg-purple-400 h-1 w-4  rounded-full"></span>
          <span className="p-2 ml-3 bg-red-200 h-1 w-4  rounded-full"></span>
        </section>
        <section className="w-12/12 h-1 h-max-[1] bg-slate-300 items-center mt-2 mb-2"></section>
        
        
        <section className="flex flex-row items-center ">
          <span className="">
            <h1 className="font-medium font-sans text-xl pr-40">Reduce motion</h1>
          </span>
          <section className="flex  ml-10 rounded-2xl w-14 h-6 border-2 bg-slate-400">
            <section className=" p-2 w-15 rounded-full bg-slate-300">
            </section>
          </section>
        </section>
        <section className="w-12/12 h-1 h-max-[1] bg-slate-300 items-center mt-2 mb-2"></section>

        <section className="flex flex-row items-center ">
          <span className="">
            <h1 className="font-medium font-sans text-xl pr-48">  Auto-play</h1>
          </span>
          <section className="flex  ml-10 rounded-2xl w-14 h-6 border-2 bg-slate-400">
            <section className=" p-2 w-15 rounded-full bg-slate-300">
            </section>
          </section>
        </section>
        <section className="w-12/12 h-1 h-max-[1] bg-slate-300 items-center mt-2 mb-2"></section>

        <section className="flex flex-row items-center ">
          <span className="">
            <h1 className="font-medium font-sans text-xl pr-48"> photo </h1>
          </span>
          <section className="flex  ml-10 rounded-2xl w-14 h-6 border-2 bg-slate-400">
            <section className=" p-2 w-15 rounded-full bg-slate-300">
            </section>
          </section>
        </section>
        <section className="w-12/12 h-1 h-max-[1] bg-slate-300 items-center mt-2 mb-2"></section>


        

      </main>

    </div>
  );
}
