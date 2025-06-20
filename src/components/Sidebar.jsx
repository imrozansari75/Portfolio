import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { GrFlagFill } from "react-icons/gr";
import { IoCodeSlash } from "react-icons/io5";
import { FaReact, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaTelegram, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Sidebar = () => {

    const CategortMenu = [
        {
            id: 1,
            name: "About",
            icon: <GrFlagFill className="h-5 w-5" />,
            to: "#about",
        },
        {
            id: 2,
            name: "Skills",
            icon: <FaReact className="h-5 w-5" />,
            to: "#skills",
        },
        {
            id: 3,
            name: "Job",
            icon: <FaBriefcase className="h-5 w-5" />,
            to: "#jobs",
        },
        {
            id: 4,
            name: "Projects",
            icon: <IoCodeSlash className="h-5 w-5" />,
            to: "#projects",
        },
        {
            id: 5,
            name: "Education",
            icon: <FaGraduationCap className="h-5 w-5" />,
            to: "#education",
        },
    ];

    const socialLink = [
        {
            id: 1,
            name: "LinkedIn",
            icon: <FaLinkedin className="h-5 w-5" />,
            href: "https://www.linkedin.com/in/imrozansari/"
        },
        {
            id: 2,
            name: "GitHub",
            icon: <FaGithub className="h-5 w-5" />,
            href: "https://github.com/imrozansari75"
        },
        {
            id: 3,
            name: "Telegram",
            icon: <FaTelegram className="h-5 w-5" />,
            href: "https://t.me/imrozansari75"
        },
        {
            id: 4,
            name: "Phone",
            icon: <FaPhoneAlt className="h-5 w-5" />,
            href: "tel:+919892211549"
        },
        {
            id: 5,
            name: "Email",
            icon: <MdEmail className="h-5 w-5" />,
            href: "mailto:mr.imroz.ansari@gmail.com"
        },
    ];

    const [isCategoryOpen, setIsCategoryOpen] = useState(true);
    const [isSocailOpen, setIsSocailOpen] = useState(true);

    return (
        <div className="flex flex-col text-white sm:pt-6 px-4 sm:pl-4 md:pl-2">
            {/* Category Dropdown */}
            <div className="flex flex-col">
                <div onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                    className="cursor-pointer text-xl font-semibold">
                    <span className='hidden sm:block'>Category</span>
                </div>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isCategoryOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                    <ul className="space-y-3 sm:pl-3 text-lg">
                        {CategortMenu.map((item) => (
                            <li key={item.id} className="flex items-center gap-4 cursor-pointer">
                                <HashLink smooth to={item.to} className="flex items-center gap-2">
                                    {item.icon}
                                    <span className='hidden sm:block'>{item.name}</span>
                                </HashLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Social Links Dropdown */}
            <div className="flex flex-col pt-4 sm:pt-0">
                <div onClick={() => setIsSocailOpen(!isSocailOpen)}
                    className="mt-4 cursor-pointer text-xl font-semibold">
                    <span className='hidden sm:block'>Social Link</span>
                </div>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isSocailOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                    <ul className="space-y-3 sm:pl-3 text-lg">
                        {socialLink.map((link) => (
                            <li key={link.id} className="flex items-center gap-4 cursor-pointer">
                                <HashLink
                                    key={link.id}
                                    to={link.href}
                                    smooth
                                    className="flex items-center gap-2 text-white"
                                >
                                    {link.icon}
                                    <span className="hidden sm:block">{link.name}</span>
                                </HashLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar