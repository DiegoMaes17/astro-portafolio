import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {EmailIcon} from './iconos/EmailIcon.jsx';


function Button({copyText}){
    return(
        <>
        <a class= "rounded-full border boder-grey/10 dark:border-white/10 flex justify-center items-center gap-x-2 py-2 px-4">
        <button class=" w-full h-full flex items-center " 
        onClick= {()=>{
            navigator.clipboard.writeText('diego.madrid.177@gmail.com')
            toast.success(copyText);
        }}>
         <span class="drop-shadow-indigo-shadow hover:scale-110 hover:transition-all"><EmailIcon/></span>
          <span>Email</span>
        </button>
      
        <ToastContainer/>
        </a>
        </>
    )
}

export default Button;
