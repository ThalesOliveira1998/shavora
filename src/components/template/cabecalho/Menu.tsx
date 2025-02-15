import MenuItem from './MenuItem'

export default function Menu() {
    

    return (
        <div className="flex gap-2">
            <MenuItem url="#inicio" className="hidden sm:flex">
                Início
            </MenuItem>
            <MenuItem url="#quemsomo" className="hidden sm:flex">
                Quem somos
            </MenuItem>
            <MenuItem url="#depoimentos" className="hidden sm:flex">
                Depoimentos
            </MenuItem>
        </div>
    )
}