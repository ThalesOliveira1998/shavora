import { useState } from "react";
import { MenuItem } from "./MenuItem";
import { FaBars, FaHome, FaCommentDots, FaEnvelope, FaGlobe, FaBook } from "react-icons/fa"; // ✅ Adicionando ícone para o Blog
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next"; // ✅ Use `useTranslation` diretamente

export default function Menu() {
  const { t } = useTranslation(); // ✅ Pegando `t` diretamente do hook
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
        {t("menu.title")} {/* ✅ Traduzindo "Menu" corretamente */}
      </button>

      {/* Dropdown do menu */}
      {menuAberto && (
        <div
          className="absolute left-0 mt-3 w-60 bg-white/10 backdrop-blur-lg border border-white/20 
          rounded-xl shadow-2xl flex flex-col items-start p-3 animate-slideDown"
        >
          <MenuItem url="/" className="menu-item">
            <FaHome size={18} />
            {t("menu.home")} {/* ✅ Traduzindo "Início" */}
          </MenuItem>
          <MenuItem url="/relatos" className="menu-item">
            <FaCommentDots size={18} />
            {t("menu.testimonials")} {/* ✅ Traduzindo "Depoimentos" */}
          </MenuItem>
          <MenuItem url="/faleconosco" className="menu-item">
            <FaEnvelope size={18} />
            {t("menu.contact")} {/* ✅ Traduzindo "Fale Conosco" */}
          </MenuItem>
          <MenuItem url="/blog" className="menu-item"> {/* ✅ Adicionando o Blog ao menu */}
            <FaBook size={18} />
            {t("menu.blog")} {/* ✅ Traduzindo "Blog" */}
          </MenuItem>
          <MenuItem url="#rodape" className="menu-item">
            <FaGlobe size={18} />
            {t("menu.social")} {/* ✅ Traduzindo "Redes Sociais" */}
          </MenuItem>

          {/* Novo botão de seleção de idioma com ícones de bandeiras */}
          <div className="w-full border-t border-white/20 mt-2 pt-2 flex items-center gap-2">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </div>
  );
}
