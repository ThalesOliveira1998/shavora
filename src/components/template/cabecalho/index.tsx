import Area from "@/components/template/comum/Area";
import Logo from "@/components/template/comum/Logo";
import Menu from "./Menu";

export default function Cabecalho() {
  return (
    <Area className="bg-black fixed z-50">
      <div className="flex items-center justify-between h-20">
        <Menu /> {/* 🚀 Agora não precisa mais passar `t` como prop */}
        <Logo />
      </div>
    </Area>
  );
}
