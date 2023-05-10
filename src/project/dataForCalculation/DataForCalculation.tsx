import data from '../../data/data.json'
import config from '../../data/config.json'
import {ChangeEvent, MouseEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {calculateCountLists} from "utils/calculateCountLists";
import {setCountAndPriceListAC, setListAC} from "../reducers/listReducer";
import {AppRootStateType, useAppSelector} from "app/store";
import {setCountAndPricePipeAC, setPipeAC} from "../reducers/pipeReducer";
import {calculateCountPipes} from "utils/calculateCountPipes";
import {calculateCountFix} from "utils/calculateCountFix";
import {setCountAndPriceFixAC, setFixAC} from "../reducers/fixReducer";
import {square} from "utils/square";
import {countPipeWidth} from "utils/countPipeWidth";
import {countPipeLength} from "utils/countPipeLength";
import {calculateCellsSize} from "utils/countCells";
import {setSizeCellsAC, setSquareAC} from "../reducers/resultReducer";
import s from "./DataForCalculation.module.css"
import {price} from "utils/price";
import {ListType, PipeType} from "project/types";
import {SelectComponents} from "project/components/selectComponents";
import {SizeComponents} from "project/components/sizeComponents";

export const DataForCalculation = ()=>{
    const dispatch = useDispatch()
    const priceList = useSelector<AppRootStateType, number>(state => state.project.list.price)
    const widthList = useSelector<AppRootStateType, number>(state => state.project.list.width)
    const materialList = useSelector<AppRootStateType, string>(state => state.project.list.material)
    const widthPipe = useSelector<AppRootStateType, number>(state => state.project.pipe.width)
    const pricePipe = useSelector<AppRootStateType, number>(state => state.project.pipe.price)
    const priceFix = useSelector<AppRootStateType, number>(state => state.project.fix.price)

    const [errorW, setErrorW] = useState ('')
    const [errorL, setErrorL] = useState ('')
    const [error, setError] = useState ('')
    const [widthConstruction, setWidthConstruction] = useState(0)
    const [lengthConstruction, setLengthConstruction] = useState(0)
    const [stepPipe, setStepPipe] = useState(0)
    const [material, setMaterial] = useState('')

    let minWidth = 0, maxWidth = 0
    let minLength = 0, maxLength = 0

    const fix = data.filter((fix)=>(fix.type==='fix'? fix : ''))

    config.filter((el) => (el.type === 'size'))
        .map((size) => (size.name === 'Ширина'
            ? (minWidth = size.min as number, maxWidth = size.max as number)
            : (minLength = size.min as number, maxLength = size.max as number)))

    const handleChooseMaterial = (e: MouseEvent<HTMLInputElement>) => {
        if (e.currentTarget.value) {
            setMaterial(e.currentTarget.value)
        }
    }
    const handleChangeList = (e: ChangeEvent<HTMLSelectElement>) => {
        setError('')
        const nameList = e.currentTarget.value
        const list = data.filter((el) => (el.name === nameList ? el : ''))
        dispatch(setListAC(list[0] as ListType))
    }

    const handleChangeWidth = (e: ChangeEvent<HTMLInputElement>) => {
        setErrorW('')
        setWidthConstruction(+e.currentTarget.value)
    }

    const handleChangeLength = (e: ChangeEvent<HTMLInputElement>) => {
        setErrorL('')
        setLengthConstruction(+e.currentTarget.value)
    }

    const handleCheckFrame = (e: MouseEvent<HTMLInputElement>) => {
        setError('')
        setStepPipe(+e.currentTarget.value)
    }

    const handleChangePipe = (e: ChangeEvent<HTMLSelectElement>) => {
        setError('')
        const namePipe = e.currentTarget.value
        const pipe = data.filter((el) => (el.name === namePipe ? el : ''))
        dispatch(setPipeAC(pipe[0] as PipeType))
        dispatch(setFixAC(fix[0]))
    }

    const handleCalculate = () => {
        if (!stepPipe || !priceList || !pricePipe) {
            return setError("Введены не все данные!!!")
        } else if (widthConstruction < minWidth || widthConstruction > maxWidth) {
            return setErrorW("Ширина конструкции задана не верно!")
        } else if (lengthConstruction > maxLength || lengthConstruction < minLength) {
            return setErrorL("Длина конструкции задана не верно!")
        } else {
            const countList = calculateCountLists(widthConstruction, lengthConstruction, widthList)
            const priceLists = price(countList, priceList)
            const countPipe = calculateCountPipes(widthConstruction, lengthConstruction, stepPipe, widthPipe)
            const pricePipes = price(countPipe, pricePipe)
            const countFix = calculateCountFix(widthConstruction, lengthConstruction, materialList)
            const priceFixes = price(countFix, priceFix)
            const squareC = square(widthConstruction, lengthConstruction)
            const countCellW = countPipeWidth(widthConstruction, stepPipe, widthPipe)
            const countCellL = countPipeLength(lengthConstruction, stepPipe, widthPipe)
            const cellW = calculateCellsSize(widthConstruction, widthPipe, countCellW)
            const cellL = calculateCellsSize(lengthConstruction, widthPipe, countCellL)
            dispatch(setCountAndPriceListAC(countList, priceLists))
            dispatch(setCountAndPricePipeAC(countPipe, pricePipes))
            dispatch(setCountAndPriceFixAC(countFix, priceFixes))
            dispatch(setSquareAC(squareC))
            dispatch(setSizeCellsAC(cellW, cellL))
        }
    }

    const inputParamW = errorW ? s.inputError : ''
    const inputParamL = errorL ? s.inputError : ''
    const errorStyle = error ? s.error : s.spanError

    return (
        <div className={s.wrapper}>
            <form className={s.form}>
                <div className={s.container}>
                    <div className={s.firstBlockForChoose}>
                        <div className={s.chooseMaterial}>
                            <h3>Выберите материал листов</h3>
                            <label className={s.chooseInput}>
                                <input type={'radio'} name={'material'} value={'plastic'}
                                       onClick={handleChooseMaterial}/>
                                Пластик
                            </label>
                            <label><input type={'radio'} name={'material'} value={'metal'}
                                          onClick={handleChooseMaterial}/>
                                Метал
                            </label>
                            <label><input type={'radio'} name={'material'} value={'all'}
                                          onClick={handleChooseMaterial}/>
                                Все виды
                            </label>
                        </div>
                        <div className={s.chooseSelect}>
                            <div>
                                <SelectComponents name={'list'}
                                                  handleChange={handleChangeList}
                                                  type={'list'}
                                                  material={material}
                                                  title={"Выберите лист"}/>
                             </div>
                            <div>
                               <SelectComponents name={'pipe'}
                                                 handleChange={handleChangePipe}
                                                 type={'pipe'}
                                                 title={"Выберите трубу"}/>
                            </div>
                        </div>
                    </div>
                    <div className={s.secondBlockForChoose}>
                        <div className={s.sizeConstruction}>
                            <h3>Введите габариты каркаса</h3>
                            <p>ВНИМАНИЕ!!! Габариты каркаса должны быть в диапазоне предельных значений</p>
                            <div className={s.minMaxSize}>
                                <div>Ширина каркаса: <p>минимальная: {minWidth} м</p>
                                    <p>максимальная: {maxWidth} м</p></div>
                                <div>Длина каркаса:<p> минимальная: {minLength} м</p>
                                    <p>максимальная: {maxLength} м</p></div>
                            </div>
                            <div className={s.inputSize}>
                                <SizeComponents title={'Ширина'}
                                                className={inputParamW}
                                                min={minWidth}
                                                max={maxWidth}
                                                onChange={handleChangeWidth}/>
                                <SizeComponents title={'Длина'}
                                                className={inputParamL}
                                                min={minLength}
                                                max={maxLength}
                                                onChange={handleChangeLength}/>
                            </div>
                        </div>
                        <div>
                            <h3>Выберите прочность</h3>
                            {config.filter((el) => (el.type === 'frame'))
                                .map((frame, index) => (
                                    <label key={index} className={s.chooseStep}>
                                        <input
                                            type={'radio'}
                                            name={'check'}
                                            value={frame.step}
                                            onClick={handleCheckFrame}
                                        />
                                        {frame.name}
                                    </label>))}
                        </div>
                    </div>
                </div>
                <span className={errorStyle}>{errorW}{errorL}{error}</span>
                <input type={'button'}
                       className={s.buttonCalculate}
                       name={'calculation'}
                       value={'Рассчитать'}
                       onClick={handleCalculate}/>
            </form>
        </div>
    )
}