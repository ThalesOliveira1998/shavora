import Area from "../comum/Area";
import Vantagem from "./Vantagem";
import ExpandableText from "@/components/template/vantagens/ExpansaoDeTexto";  // Importe o ExpandableText

export default function QuemSomos() {
    return (
        <Area id="Quem somos" className="bg-black py-16 sm:py-36">
            <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
            <Vantagem
                    imagem={{ src: "/IMG_5429.jpg", width: 500, height: 300 }}  
                    titulo="O que é Shavorã?"
                    subtitulo={
                        <ExpandableText 
                            text={`Raizes e Asas 
A palavra Shavorã significa mulher, na língua Yawanawa. 
O movimento Shavorã, simboliza a luta pela equidade, pela igualdade, pelo empoderamento das mulheres indígenas e pela visibilidade da comunidade LGBTQIAPN+ no contexto das tradições indígenas. 
A missão de Shavorã é transformar a realidade social e espiritual, oferecendo uma plataforma para que as vozes femininas e LGBTQIAPN+ sejam ouvidas e respeitadas. Elas se dedicam a combater o machismo dentro do ambiente e do meio espiritual, mesmo que ainda honrando suas raízes ancestrais, acreditam em “asas” de um novo pensamento para transformar as estruturas opressoras das tradições. 
Inspiradas por Hushahu, a primeira mulher Yawanawa a ocupar um espaço significativo no campo espiritual de seu povo.
A união de Hukena e Nãwãēma representa um rompimento com tais estruturas e busca dar voz às questões que afetam as mulheres, além de trabalhar na valorização da cultura Yawanawá e na luta pelos direitos dos povos indígenas. 
Em suas apresentações, elas também promovem a troca de saberes entre culturas, reforçando a importância do intercâmbio cultural, como a união entre a ancestralidade Yawanawá e os princípios da Umbanda, difundindo amor, respeito e cura em suas práticas.
Além disso, elas têm se engajado em turnês internacionais, levando suas mensagens e canções a diversos públicos e criando um espaço para discutir temas como identidade, espiritualidade e resistência cultural .
Esse movimento é uma expressão de amor, respeito e resistência, valorizando a independência das mulheres e incentivando uma sociedade mais justa e inclusiva.
A essência de Shavorã está enraizada no equilíbrio entre o feminino e o sagrado, desafiando estruturas opressoras e plantando sementes de uma nova consciência. É uma celebração da força das mulheres como curadoras, líderes e guardiãs da vida, sempre em harmonia com as raízes ancestrais e o universo espiritual.`}
                            maxWords={30}
                        />
                    }
                    
                />  
                <Vantagem
                    imagem={{ src: "/vantagem-1.jpg", width: 500, height: 300 }}  
                    titulo="Nãwãēma"
                    subtitulo={
                        <ExpandableText 
                            text={`É uma mulher profundamente conectada à espiritualidade, à luta pelos direitos das mulheres e à preservação das tradições ancestrais. 
                            O seu caminho e conexão espiritual vem do singular sincretismo afro-brasileiro, da tradição da Umbanda, onde se dedicou ao aprendizado desde muito jovem, através de sua linhagem familiar. 
                            Essa tradição lhe proporcionou uma base sólida de fundamento, fé, respeito aos ancestrais e trabalho espiritual. 
                            Ao longo de sua vida, desenvolveu uma compreensão única da força feminina como pilar da transformação espiritual e social. 
                            Quando conheceu Hukena, ampliou sua conexão espiritual e iniciou um profundo processo de aprendizado ao mergulhar nas práticas da tradição Yawanawa. 
                            Sob a orientação de Hushahu Yawanawá, sua professora, passou por iniciações e jejuns espirituais fortalecendo seu compromisso com as medicinas sagradas e a responsabilidade de servi-las. 
                            Busca plantar sementes de amor, respeito e consciência. Sua missão vai além da espiritualidade; é uma luta por equidade, inclusão e o resgate da essência feminina como força inovadora.
                            Acredita no poder das mulheres como guardiãs do sagrado e líderes da transformação.
                            Atualmente, é líder espiritual, idealizadora e cofundadora do movimento Shavorã, junto com Hukena.`}
                            maxWords={30}
                        />
                    }
                    inverter
                />
                <Vantagem
                    imagem={{ src: "/vantagem-2.jpg", width: 500, height: 300 }}  
                    titulo="Hukena"
                    subtitulo={
                        <ExpandableText 
                            text={`É uma mulher indígena da etnia Yawanawá.
Iniciou sua jornada no caminho da espiritualidade muito jovem, sendo uma das mulheres mais jovens de seu povo a ser totalmente iniciada nas práticas espirituais mais sagradas e importantes de sua tradição. Ela recebeu essas bênçãos e ensinamentos das mãos e do coração de Tata, um dos dois últimos grandes mestres espirituais da nação Yawanawa, e de sua mãe Hushahu.
Desde então ela dedica a jornada de sua vida ao estudo das medicinas sagradas.
Através e a partir dos saberes ancestrais desta tradição, ela conduz cerimônias espirituais e curativas por todo o Brasil e exterior, levando sua força, seus saberes e seus cantos ao lado das sagradas medicinas.
Atualmente, tem se destacado por sua liderança espiritual e cultural. Ela representa a força feminina dentro de uma tradição que, historicamente, foi amplamente dominada pelos homens. Sua trajetória se conecta ao legado de sua mãe, Hushahu, a primeira mulher Yawanawá a conquistar um espaço espiritual dentro de seu povo, e se tornar a primeira mulher pajé do povo Yawanawa, rompendo com estruturas muito patriarcais.
Hukena é pioneira em assumir um relacionamento com outra mulher dentro de seu povo, ao lado de Dominique (Nãwãēma). `}
                            maxWords={30}
                        />
                    }
                    
                />
              
             <Vantagem
                    imagem={{ src: "/vantagem-4.jpg", width: 500, height: 300 }}  
                    titulo="Quem são os Yawanawá?"
                    subtitulo={
                        <ExpandableText 
                            text={`O povo Yawanawá é um grupo indígena que habita a região do rio Gregório, no Acre, Brasil. Pertencem à família linguística Pano e possuem uma rica tradição espiritual, cultural e medicinal.

Espiritualidade e Medicinas Sagradas

Os Yawanawá são conhecidos por seu profundo conhecimento das medicinas da floresta, como o rapé, a ayahuasca (uni) e outras plantas de poder utilizadas em rituais de cura e expansão da consciência. Seu caminho espiritual envolve longos períodos de dieta e isolamento, onde os iniciados aprendem diretamente com os espíritos da floresta e os pajés mais experientes.

Hushahu Yawanawá foi a primeira mulher de seu povo a romper as barreiras do patriarcado e tornar-se pajé, abrindo caminho para outras mulheres dentro da espiritualidade Yawanawá. Sua filha, Hukena Yawanawá, seguiu seus passos e hoje é uma das líderes espirituais mais jovens da tradição.

Cultura e Cânticos Sagrados

Os cantos Yawanawá são uma das partes mais importantes da sua tradição. São considerados rezos e possuem o poder de cura, conexão com os espíritos e fortalecimento da energia em cerimônias. Muitos desses cânticos foram preservados por gerações e são passados oralmente aos iniciados.

Resistência e Atualidade

Os Yawanawá passaram por períodos de grande opressão, especialmente com a chegada dos seringalistas no século XX. No entanto, nas últimas décadas, têm se fortalecido e retomado suas práticas ancestrais, abrindo espaço para que suas tradições sejam conhecidas pelo mundo. Além disso, têm lutado pela demarcação e proteção de suas terras e pelo fortalecimento da identidade indígena.`}
                            maxWords={30}
                        />
                    }
                    inverter
                /> 
            </div>
        </Area>
    );
}
