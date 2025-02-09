import { FC, useState } from "react"
import './Settings.scss'
import { IoCaretBack } from "react-icons/io5"
import { Mouse } from "./pages/Mouse/Mouse"
import { TypeSettings } from "./TypeSettings"

type TypePAGE = {
    name: string
    icon: string
    pageElement: JSX.Element
}

export const Settings: FC<TypeSettings> = ({ mouse, setMouse }) => {
    const [openPage, setOpenPage] = useState<boolean>(false)
    const [page, setPage] = useState<null | number>(null)



    const PAGES: TypePAGE[] = [
        {
            name: 'Дисплей',
            icon: 'https://img.icons8.com/?size=256w&id=vfLlLKzofS1u&format=png',
            pageElement: <p>Дисплей</p>
        },
        {
            name: 'Персонализация',
            icon: 'https://img.icons8.com/?size=256w&id=QVobCUiSKNwK&format=png',
            pageElement: <p>Персонализация</p>
        },
        {
            name: 'Мышь',
            icon: 'https://img.icons8.com/?size=256&id=wXT0qzqdjY0S&format=png',
            pageElement: <Mouse mouse={mouse} setMouse={setMouse} />
        },
        {
            name: 'Память',
            icon: 'https://img.icons8.com/?size=512w&id=19968&format=png',
            pageElement: <p>Память</p>
        },
        {
            name: 'Приложения',
            icon: 'https://img.icons8.com/?size=256w&id=kJr8od2fGcmF&format=png',
            pageElement: <p>Приложения</p>
        },
        {
            name: 'О системе',
            icon: 'https://img.icons8.com/?size=256&id=VQOfeAx5KWTK&format=png',
            pageElement: <p>О системе</p>
        }
    ]



    return (
        <div className="settings">
            {!openPage && page === null && <div className="home-page">
                <div className="header"><h3>Настройки</h3></div>
                <div className="setting-pages">
                    {PAGES.map((page, i) => <div key={i} className="setting-page" onClick={() => { setOpenPage(true), setPage(i) }}>
                        <img src={page.icon} />
                        <p>{page.name}</p>
                    </div>)}
                </div>
            </div>}

            {openPage && page !== null && <div className="page">
                <div className="page-header"><button onClick={() => { setOpenPage(false), setPage(null) }}><IoCaretBack /></button><b>{PAGES[page].name}</b></div>
                {PAGES[page].pageElement}    
            </div>}
        </div>
    )
}