import { useUserContext } from "@/context/appContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  FaRightToBracket as LogoutIcon,
  FaMagnifyingGlass as SearchIcon,
} from "react-icons/fa6";

interface ForumHeadProps {
  refresh: () => void;
}

export default function ForumHead({ refresh }: ForumHeadProps) {

  const {signOut} = useUserContext()
  const router = useRouter()

  const handleSignOut = async ()=> {
    await signOut()
    router.push('/login')
  }

  return (
    <>
      <div className="w-full h-20 bg-white flex justify-between p-4 items-center">
        <div className="w-full flex md:justify-center">
          <h1 className="font-black text-gray-700 text-2xl ">5CHAN</h1>
        </div>
        <div className="flex flex-row gap-2">
          {/* <SearchIcon size={26} className="text-gray-400" /> */}
          <button type="button" onClick={handleSignOut}>
            <LogoutIcon size={28} className="text-gray-400" />
          </button>
        </div>
      </div>
      <div className="w-full h-20 bg-gray-800 flex items-center justify-start pl-4">
        <ul className="flex flex-row gap-5">
          <button type="button" onClick={refresh}>
            <h3 className="font-bold text-gray-400">Novos</h3>
          </button>
          <button type="button" onClick={refresh}>
            <h3 className="font-bold text-gray-400">Destaques</h3>
          </button>
          <button type="button" onClick={refresh}>
            <h3 className="font-bold text-gray-400">Todos</h3>
          </button>
        </ul>
      </div>
    </>
  );
}
