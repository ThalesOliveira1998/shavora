export default function Slogan() {

    function renderizarFrase() {
        return (
            <div
                className={`
                    flex flex-col items-center md:items-start text-4xl lg:text-6xl
                    text-white font-light
                `}
            >
                <div className="flex gap-2.5">
                    <div className={`relative`}>
                        <span
                            className={`
                          absolute bottom-1 left-0 w-full border-b-8 border-[#bf1407] -rotate-2
                        `}
                        ></span>
                        <span className="relative">Conectando</span>
                    </div>
                    <div>Culturas</div>
                </div>
                <div className="flex gap-2.5">
                    <span>e</span>
                    <span>curando almas</span>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-center gap-5">
        {renderizarFrase()}
        <div className="text-sm lg:text-lg font-thin text-zinc-500 text-center sm:text-left">
            Duas vozes, uma história. Conheça a nossa historia<br />
            A dupla Shavorã mistura emoção e autenticidade em cada nota.
        </div>
    </div>
    )
}