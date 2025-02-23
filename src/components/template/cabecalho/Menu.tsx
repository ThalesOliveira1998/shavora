import { useState } from "react";
import { MenuItem } from "./MenuItem";
import { FaBars, FaHome,  FaCommentDots, FaEnvelope, FaGlobe } from "react-icons/fa"; // Ícones do menu

export default function Menu() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <div className="relative">
            {/* Botão do menu com degrade azul → vermelho */}
            <button
                className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 
                text-white px-5 py-3 rounded-full flex items-center gap-3 shadow-lg transition-all duration-300"
                onClick={() => setMenuAberto(!menuAberto)}
            >
                <FaBars size={22} />
                Menu
            </button>

            {/* Dropdown do menu */}
            {menuAberto && (
                <div
                    className="absolute left-0 mt-3 w-60 bg-white/10 backdrop-blur-lg border border-white/20 
                    rounded-xl shadow-2xl flex flex-col items-start p-3 animate-slideDown"
                >
                    <MenuItem url="/" className="menu-item">
                        <FaHome size={18} />
                        Início
                    </MenuItem>
                    <MenuItem url="/#depoimentos" className="menu-item">
                        <FaCommentDots size={18} />
                        Depoimentos
                    </MenuItem>
                    <MenuItem url="/faleconosco" className="menu-item">
                        <FaEnvelope size={18} />
                        Fale Conosco
                    </MenuItem>
                    <MenuItem url="#rodape" className="menu-item">
                        <FaGlobe size={18} />
                        Redes Sociais
                    </MenuItem>
                </div>
            )}
        </div>
    );
}
