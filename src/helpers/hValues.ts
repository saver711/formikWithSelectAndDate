import { BiHomeSmile } from 'react-icons/bi'
import { BsCloudArrowUp, BsPeople } from 'react-icons/bs'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { ImFilesEmpty } from 'react-icons/im'
import { MdManageAccounts } from 'react-icons/md'
import { IoIosGitBranch } from 'react-icons/io'
import { TbZoomIn } from 'react-icons/tb'
import { AiOutlineControl } from 'react-icons/ai'
import { Home } from '../components/content/home/Home'
import { Documents } from '../components/content/documents/Documents'
import { Agents } from '../components/content/agents/Agents'
import { Extras } from '../components/content/exrtas/Extras'
import { Management } from '../components/content/management/Management'
import { Branches } from '../components/content/branches/Branches'
import { Suppliers } from '../components/content/suppliers/Suppliers'
import { Audit } from '../components/content/audit/Audit'
import { HashClients } from '../components/content/hashClients/HashClients'
import { ControlPanel } from '../components/content/controlPanel/ControlPanel'


export const hColors = {
    white: 'white',
    primary: '#295E56',
    primaryLight: '#b6c3c0',
    primaryLighter: '#e3e8e7',
    redish: 'rgb(255, 82, 82)'
}

export const sideNavData = {
    primary: [
        {
            id: 1,
            title: "الرئيسية",
            icon: BiHomeSmile,
        },
        {
            id: 2,
            title: "المستندات",
            icon: ImFilesEmpty,
        },
        {
            id: 3,
            title: "العملاء",
            icon: HiOutlineBriefcase,
        },
    ],
    secondary: [
        {
            id: 4,
            title: "الإضافات",
            icon: BsCloudArrowUp,
        },
        {
            id: 5,
            title: "الإدارة",
            icon: MdManageAccounts,
        },
        {
            id: 6,
            title: "الفروع",
            icon: IoIosGitBranch,
        },
    ],
    extra: [
        {
            id: 7,
            title: "الموردين",
            icon: BsPeople,
        },
        {
            id: 8,
            title: "التدقيق",
            icon: TbZoomIn,
        },
        {
            id: 9,
            title: "عملاء التجزئة",
            icon: BsPeople,
        },
        {
            id: 10,
            title: "لوحة التحكم",
            icon: AiOutlineControl,
        },
    ],


}
export const contentData = {
    1: Home,
    2: Documents,
    3: Agents,
    4: Extras,
    5: Management,
    6: Branches,
    7: Suppliers,
    8: Audit,
    9: HashClients,
    10: ControlPanel
}

export const documentFormSelectOptions = {
    type: [{ value: "صنف 1", label: "صنف 1" },
    { value: "صنف 2", label: "صنف 2" },
    { value: "صنف 3", label: "صنف 3" },],
    kind: [{ value: "فئة 1", label: "فئة 1" },
    { value: "فئة 2", label: "فئة 2" },
    { value: "فئة 3", label: "فئة 3" },],
    metal: [{ value: "معدن 1", label: "معدن 1" },
    { value: "معدن 2", label: "معدن 2" },
    { value: "معدن 3", label: "معدن 3" },],
    caliber: [{ value: "عيار 1", label: "عيار 1" },
    { value: "عيار 2", label: "عيار 2" },
    { value: "عيار 3", label: "عيار 3" },],
    stocks: [{ value: "سهم 1", label: "سهم 1" },
    { value: "سهم 2", label: "سهم 2" },
    { value: "سهم 3", label: "سهم 3" },],
}