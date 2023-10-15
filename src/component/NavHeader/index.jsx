import React from "react";
import cl from './index.module.css'
import ButtonHome from "../ButtonHome";
import InputSearch from "../InputSearch";

export default function NavHeader({home}) {
    return (
        <div className={cl.nav}>
            <ButtonHome home={home}/>
            <InputSearch />
        </div>
    );
}
