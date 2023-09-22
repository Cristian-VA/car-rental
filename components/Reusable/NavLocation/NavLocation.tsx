
import Link from "next/link"
import {BiSolidChevronRight} from "react-icons/bi"

const NavLocation = ({name}:{name:string}) => {
  return (
    <div className="flex mt-6 sm:mt-10 mb-6 font-semibold text-neutral-500 gap-2">
       <Link href="/" className="hover:text-red-600 transition">
              <h1> Home </h1>
        </Link>

        <BiSolidChevronRight className="my-auto text-red-600 w-6 h-6"/>

        
        <h1 className="font-medium"> {name} </h1>
        
    </div>
  )
}

export default NavLocation