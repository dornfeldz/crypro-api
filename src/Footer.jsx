import {Link} from "react-router-dom";

function Footer() {
    return (
        <div>
            <div className="mt-16 px-10 py-6 w-full bg-black h-48">
                <div className="grid grid-cols-2 gap-6">
                    <h2 className="flex items-center gap-2 text-5xl font-bold"><span className="material-symbols-outlined text-orange-400 text-4xl">paid</span><span className="text-orange-400">Crypto</span>Pulse</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 font-medium">
                        <Link className="mb-6" to="/">Home</Link>
                        <Link to="https://www.coinlore.com/cryptocurrency-data-api" target="_blank">API</Link>
                        <Link className="mb-6" to="https://dornfeld.dev" target="_blank">Contact</Link>
                        <Link to="https://github.com/dornfeldz" target="_blank">GitHub</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;