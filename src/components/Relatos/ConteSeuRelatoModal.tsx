"use client";

import {
  Button,
  Modal,
  TextInput,
  Textarea,
  Select,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { IconSend } from "@tabler/icons-react";

export default function ConteSeuRelatoModal() {
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);
  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  const form = useForm({
    initialValues: {
      nome: "",
      email: "",
      comoConheceu: "",
      relato: "",
    },

    validate: {
      nome: (value) => (value ? null : "Informe seu nome"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email inválido"),
      relato: (value) => (value ? null : "O relato é obrigatório"),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      const response = await fetch("/api/enviar-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: values.nome,
          email: values.email,
          mensagem: `Como conheceu a dupla: ${values.comoConheceu}\n\nRelato:\n${values.relato}`,
        }),
      });

      if (response.ok) {
        setMensagemEnviada(true);
        form.reset();
        setTimeout(() => {
          setMensagemEnviada(false);
          close();
        }, 2500);
      } else {
        alert("Erro ao enviar relato.");
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={open} variant="light" radius="xl" leftSection={<IconSend size={18} />}>
        Conte também o seu relato
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        title="Conte também o seu relato"
        centered
        size="lg"
        radius="lg"
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Nome"
            placeholder="Seu nome completo"
            {...form.getInputProps("nome")}
            required
            mt="md"
          />
          <TextInput
            label="E-mail"
            placeholder="seu@email.com"
            {...form.getInputProps("email")}
            required
            mt="md"
          />
          <Select
            label="Como conheceu a dupla?"
            placeholder="Selecione uma opção"
            data={[
              "Instagram",
              "Site",
              "YouTube",
              "Indicação de amigo(a)",
              "Evento presencial",
              "Outro",
            ]}
            {...form.getInputProps("comoConheceu")}
            mt="md"
          />
          <Textarea
            label="Seu relato"
            placeholder="Compartilhe com a gente como a dupla te tocou"
            autosize
            minRows={4}
            {...form.getInputProps("relato")}
            required
            mt="md"
          />

          <Group justify="flex-end" mt="xl">
            <Button type="submit" loading={loading}>
              Enviar relato
            </Button>
          </Group>

          {mensagemEnviada && (
            <p className="text-green-600 text-sm mt-4">Relato enviado com sucesso!</p>
          )}
        </form>
      </Modal>
    </>
  );
}
