import {useSelector} from "react-redux";
import {AppRootStateType} from "app/store";
import s from './Result.module.css'

export const Result = () =>{
    const nameList = useSelector<AppRootStateType, string>(state => state.project.list.name)
    const unitList = useSelector<AppRootStateType, string>(state => state.project.list.unit)
    const countList = useSelector<AppRootStateType, number>(state => state.project.countList)
    const priceList = useSelector<AppRootStateType, number>(state => state.project.priceLists)
    const namePipe = useSelector<AppRootStateType, string>(state => state.project.pipe.name)
    const unitPipe = useSelector<AppRootStateType, string>(state => state.project.pipe.unit)
    const countPipe = useSelector<AppRootStateType, number>(state => state.project.countPipe)
    const pricePipe = useSelector<AppRootStateType, number>(state => state.project.pricePipes)
    const nameFix = useSelector<AppRootStateType, string>(state => state.project.fix.name)
    const unitFix = useSelector<AppRootStateType, string>(state => state.project.fix.unit)
    const countFix = useSelector<AppRootStateType, number>(state => state.project.countFix)
    const priceFixes = useSelector<AppRootStateType, number>(state => state.project.priceFix)
    const square = useSelector<AppRootStateType, number>(state => state.project.square)
    const cellW = useSelector<AppRootStateType, number>(state => state.project.cellWidth)
    const cellL = useSelector<AppRootStateType, number>(state => state.project.cellLength)

    return (
        <div className={s.resultBlock}>
            <div className={s.firstBlock}>
                <div><b>Общая площадь конструкции: {square} м2</b></div>
                <div><b>Размер ячейки: {cellW}, м x {cellL}, м</b></div>
            </div>

            <table cellPadding={'5px'}>
                <thead>
                <tr>
                    <td className={s.title}><b>Наименование</b></td>
                    <td className={s.unit}><b>Единица</b></td>
                    <td className={s.count}><b>Количество</b></td>
                    <td className={s.summa}><b>Сумма, руб</b></td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={s.title}>
                        {nameList}
                    </td>
                    <td className={s.unit}>
                        шт
                    </td>
                    <td className={s.countBody}>
                        {countList}
                    </td>
                    <td className={s.summaBody}>
                        {priceList}
                    </td>
                </tr>
                <tr>
                    <td className={s.title}>
                        {namePipe}
                    </td>
                    <td className={s.unit}>
                        {unitPipe}
                    </td>
                    <td className={s.countBody}>
                        {countPipe}
                    </td>
                    <td className={s.summaBody}>
                        {pricePipe}
                    </td>
                </tr>
                <tr>
                    <td className={s.title}>
                        {nameFix}
                    </td>
                    <td className={s.unit}>
                        {unitFix}
                    </td>
                    <td className={s.countBody}>
                        {countFix}
                    </td>
                    <td className={s.summaBody}>
                        {priceFixes}
                    </td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan={3}>
                        <b>ИТОГО</b>
                    </td>

                    <td className={s.summaBody}>
                        {priceList + pricePipe + priceFixes}
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
    )
}