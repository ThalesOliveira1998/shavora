import { IconBrandInstagram, IconBrandSpotify, IconBrandWhatsapp, IconBrandItch } from "@tabler/icons-react";
import RedeSocial from "./RedeSocial";

export default function RedesSociais() {
    return (
        <div className="flex">
            <RedeSocial icone={<IconBrandInstagram />} url="https://www.instagram.com/shavora.arte.medicina/" />
            <RedeSocial icone={<IconBrandSpotify />} url="https://open.spotify.com/intl-pt/artist/0GLYKRRZtJOM44fvWILw3I" />
            <RedeSocial icone={<IconBrandWhatsapp />} url="https://wa.me/message/BF3NB2ZCSNZ4N1" />
            <RedeSocial icone={<IconBrandItch />} url="https://shavorastore.com.br" />
        </div>
    );
}