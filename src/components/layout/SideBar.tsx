"use client"

import { useState, useEffect, useLayoutEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faUser, faPerson, faHome, faGear, faRightFromBracket, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-regular-svg-icons';
import NavLink from '../buttons/NavLink';
import Logo2 from "/public/logo2.png";
import Logo3 from "/public/logo3.png";

export default function SideBar() {
    const [expanded, setExpanded] = useState(false);
    const [currentPath, setCurrentPath] = useState("");

    const navbar_links = [
        { path: "/home", icon: faHome, name: "Início" },
        { path: "/users", icon: faUser, name: "Usuários" },
        { path: "/doctors", icon: faStethoscope, name: "Médicos" },
        { path: "/patients", icon: faPerson, name: "Pacientes" },
        { path: "/schedules", icon: faIdCard, name: "Agendamentos" },
    ];

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <aside className={`${expanded ? "w-96" : "w-20"} h-full z-30 fixed flex flex-col bg-white shadow transition-all duration-300`}>
            <div className='w-full overflow-hidden'>
                <Image
                    src={expanded ? Logo3 : Logo2}
                    alt="Logo"
                    className={`${expanded ? "max-w-96 px-24 py-8 shadow" : "p-4 max-w-20"}`}
                />
            </div>

            <FontAwesomeIcon
                icon={faCircleChevronLeft}
                className={`absolute top-1/2 ${expanded ? "left-[23rem]" : "left-[4rem]"} text-primary text-3xl hover:scale-105 hover:opacity-90 cursor-pointer transition-all duration-300`}
                onClick={toggleExpanded}
            />

            <nav id="aside-content" className="w-full flex flex-col grow justify-between py-4">
                <div className="w-full">
                    {navbar_links.map((link, index) => (
                        <NavLink
                            key={index}
                            path={link.path}
                            icon={link.icon}
                            text={link.name}
                            currentPath={currentPath}
                            expanded={expanded}
                        />
                    ))}
                </div>

                <div id="aside-footer" className="w-full self-end items-center">
                    <NavLink
                        path="/config"
                        icon={faGear}
                        text="Configurações"
                        currentPath={currentPath}
                        expanded={expanded}
                    />
                    <NavLink
                        path="/"
                        icon={faRightFromBracket}
                        text="Sair"
                        currentPath={currentPath}
                        expanded={expanded}
                    />
                </div>
            </nav>
        </aside>
    );
}
