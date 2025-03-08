"use client";

import { useState } from "react";
import Area from "../template/comum/Area";
import { useTranslation } from "react-i18next"; // ✅ Importando o hook de tradução

const Formulario = () => {
  const { t } = useTranslation(); // ✅ Pegando `t` do hook
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const numeroWhatsApp = "5583998306540"; // Substitua pelo seu número

  const enviarWhatsApp = () => {
    const mensagemFormatada = encodeURIComponent(
      `${t("contact.name")}: ${nome}\n${t("contact.email")}: ${email}\n${t("contact.message")}: ${mensagem}`
    );
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagemFormatada}`;
    window.open(url, "_blank");
  };

  const enviarEmail = async () => {
    try {
      await fetch("/api/enviar-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, mensagem }),
      });
      alert(t("contact.successMessage")); // ✅ Traduzindo a mensagem de sucesso
    } catch {
      alert(t("contact.errorMessage")); // ✅ Traduzindo a mensagem de erro
    }
  };

  return (
    <Area>
      <div className="p-4 border rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">{t("contact.formTitle")}</h2> {/* ✅ Traduzido */}
        
        <input
          type="text"
          placeholder={t("contact.name")} // ✅ Traduzindo "Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="email"
          placeholder={t("contact.email")} // ✅ Traduzindo "Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <textarea
          placeholder={t("contact.message")} // ✅ Traduzindo "Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        
        <div className="flex gap-2">
          <button 
            onClick={enviarWhatsApp} 
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            {t("contact.whatsapp")} {/* ✅ Traduzindo "WhatsApp" */}
          </button>
          <button 
            onClick={enviarEmail} 
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {t("contact.send")} {/* ✅ Traduzindo "Enviar" */}
          </button>
        </div>
      </div>
    </Area>
  );
};

export default Formulario;
