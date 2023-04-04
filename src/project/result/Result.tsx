import {useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import s from './Result.module.css'

export const Result = () =>{
    const nameList = useSelector<AppRootStateType, string>(state => state.list.list.name)
    const unitList = useSelector<AppRootStateType, string>(state => state.list.list.unit)
    const countList = useSelector<AppRootStateType, number>(state => state.list.countList)
    const priceList = useSelector<AppRootStateType, number>(state => state.list.priceLists)
    const namePipe = useSelector<AppRootStateType, string>(state => state.pipe.pipe.name)
    const unitPipe = useSelector<AppRootStateType, string>(state => state.pipe.pipe.unit)
    const countPipe = useSelector<AppRootStateType, number>(state => state.pipe.countPipe)
    const pricePipe = useSelector<AppRootStateType, number>(state => state.pipe.pricePipes)
    const nameFix = useSelector<AppRootStateType, string>(state => state.fix.fix.name)
    const unitFix = useSelector<AppRootStateType, string>(state => state.fix.fix.unit)
    const countFix = useSelector<AppRootStateType, number>(state => state.fix.countFix)
    const priceFixes = useSelector<AppRootStateType, number>(state => state.fix.priceFix)
    const square = useSelector<AppRootStateType, number>(state => state.result.square)
    const cellW = useSelector<AppRootStateType, number>(state => state.result.cellWidth)
    const cellL = useSelector<AppRootStateType, number>(state => state.result.cellLength)

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
                        {unitList}
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