import gif from "@/assets/Reflect-Code-Gif.gif"
import FormComponent from "@/components/forms/FormComponent"
import { useEffect } from "react";
import { clientCheck } from 'poll-server-check';


function HomePage() {
    useEffect(()=>{
        clientCheck(import.meta.env.VITE_BACKEND_URL);
    },[])
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-16">
            <div className="my-12 flex h-full min-w-full flex-col items-center justify-evenly sm:flex-row sm:pt-0">
                <div className="flex w-full animate-up-down justify-center sm:w-1/2 sm:pl-4">
                    <img
                        src={gif}
                        alt="Reflect Code Illustration"
                        className="mx-auto w-[250px] sm:w-[550px]"
                    />
                </div>
                <div className="flex w-full items-center justify-center sm:w-1/2">
                    <FormComponent />
                </div>
            </div>
        </div>
    )
}

export default HomePage
