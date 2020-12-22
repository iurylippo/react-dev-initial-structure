import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';

type Items = {
    title: string;
    path: string;
    icon: JSX.Element;
};

type ItemTypes = Items[];

const items: ItemTypes = [
    {
        title: 'Home',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Pedidos',
        path: '/order',
        icon: <FaIcons.FaFileInvoiceDollar />,
    },
    {
        title: 'Relatorios',
        path: '/report',
        icon: <FaIcons.FaFileSignature />,
    },
    {
        title: 'EDI',
        path: '/edi',
        icon: <SiIcons.SiRedhatopenshift />,
    },
    {
        title: 'Upload',
        path: '/upload',
        icon: <RiIcons.RiContactsBookUploadLine />,
    },
    {
        title: 'Controle de acesso',
        path: '/access',
        icon: <FaIcons.FaUserEdit />,
    },
];

export default items;
