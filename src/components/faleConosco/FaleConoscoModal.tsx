"use client";

import {
  Modal,
  Button,
  TextInput,
  Textarea,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function FaleConoscoModal() {
  const { t } = useTranslation();
  const [opened, { open, close }] = useDisclosure(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const numeroWhatsApp = "5583998306540";

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
      alert(t("contact.successMessage"));
      close();
    } catch {
      alert(t("contact.errorMessage"));
    }
  };

  return (
    <>
      {/* Botão para abrir o modal */}
      <Button
        variant="gradient"
        gradient={{ from: "pink", to: "violet", deg: 45 }}
        radius="xl"
        size="md"
        onClick={open}
      >
        {t("contact.buttonLabel")}
      </Button>

      {/* Modal com texto claro e fundo escuro */}
      <Modal
        opened={opened}
        onClose={close}
        centered
        classNames={{
          content: "bg-[#1a1a1a] text-white", // fundo escuro + texto branco
        }}
        title={<span className="text-white">{t("contact.title")}</span>}
      >
        <form className="space-y-4">
          <TextInput
            label={t("contact.name")}
            placeholder={t("contact.name")}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            classNames={{ label: "text-white", input: "text-black" }}
          />
          <TextInput
            label={t("contact.email")}
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            classNames={{ label: "text-white", input: "text-black" }}
          />
          <Textarea
            label={t("contact.message")}
            placeholder={t("contact.message")}
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
            minRows={4}
            classNames={{ label: "text-white", input: "text-black" }}
          />

          <Group justify="flex-end" mt="md">
            <Button color="green" onClick={enviarWhatsApp}>
              {t("contact.whatsapp")}
            </Button>
            <Button
              variant="gradient"
              gradient={{ from: "pink", to: "violet", deg: 45 }}
              radius="xl"
              size="md"
              onClick={enviarEmail}
            >
              {t("contact.send")}
            </Button>
          </Group>
        </form>
      </Modal>
    </>
  );
}
