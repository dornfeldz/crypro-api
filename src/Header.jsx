import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="bg-black flex justify-between px-5 py-4 mb-6">
            <Link to="/" className="flex items-center gap-2 text-2xl lg:text-5xl font-bold"><span className="material-symbols-outlined text-orange-400 text-4xl">paid</span><span className="text-orange-400">Crypto</span>Pulse</Link>
            <input type="text" placeholder="You can't search anything yet" className="hidden lg:block h-8 self-center rounded-full px-3 w-72 text-gray-950"/>
        </div>
    );
}

export default Header;