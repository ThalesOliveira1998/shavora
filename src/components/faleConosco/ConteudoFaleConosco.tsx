import Area from "@/components/template/comum/Area";

export default function ConteudoFaleConosco() {
    return (
        <Area id="inicio" className="pt-20 bg-[#0A0A0A] text-white text-center">
            <div className="flex flex-col-reverse md:flex-row items-center justify-around h-auto md:h-[500px]">
                
                {/* Copy chamando para ação */}
                <div className="max-w-2xl mx-auto px-6 md:px-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Quer levar a Shavorã para sua cidade?
                    </h2>
                    <p className="text-lg md:text-xl">
                        Se deseja trazer a experiência Shavorã para sua região, tirar dúvidas 
                        ou tratar de qualquer outro assunto, preencha o formulário abaixo e entraremos em contato!
                    </p>
                </div>
            </div>
        </Area>
    );
}
