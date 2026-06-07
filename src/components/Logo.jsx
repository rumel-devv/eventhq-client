import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-pink-500 to-indigo-500 p-2 rounded-lg text-white shadow-md shadow-pink-500/20">
                 <FaRegCalendarAlt className="text-lg"/>
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-pink-500 bg-clip-text text-transparent">
             EventHQ
            </span>
        </Link>
    );
};

export default Logo;