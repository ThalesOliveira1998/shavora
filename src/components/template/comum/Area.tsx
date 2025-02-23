interface AreaProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
    className?: string
    id?: string
}

export default function Area(props: AreaProps) {
    return (
        <div id={props.id ?? ''} className={`
            flex justify-center w-full
            ${props.className ?? ''}
        `}>
            <div className={`
                px-4 md:px-7 xl:px-0 
                w-full max-w-sm md:max-w-full xl:w-[1200px]
            `}>
                {props.children}
            </div>
        </div>
    )
}
