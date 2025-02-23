"use client";
import { useState } from "react";
import Area from "../template/comum/Area";

const Formulario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const numeroWhatsApp = "5583998306540"; // Substitua pelo seu número

  const enviarWhatsApp = () => {
    const mensagemFormatada = encodeURIComponent(
      `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`
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
      alert("Email enviado com sucesso!");
    } catch {
      alert("Erro ao enviar email");
    }
  };

  return (
    <Area>
      <div className="p-4 border rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Fale Conosco</h2>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <textarea
          placeholder="Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <div className="flex gap-2">
          <button onClick={enviarWhatsApp} className="bg-green-500 text-white px-4 py-2 rounded">
            WhatsApp
          </button>
          <button onClick={enviarEmail} className="bg-blue-500 text-white px-4 py-2 rounded">
            Email
          </button>
        </div>
      </div>
    </Area>
  );
};

export default Formulario;
