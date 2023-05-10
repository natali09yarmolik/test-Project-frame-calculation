import {ChangeEvent} from "react";

type PropsType = {
    title: string
    className: string
    min: number
    max: number
    onChange: (e: ChangeEvent<HTMLInputElement>)=>void
}

export const SizeComponents = (props: PropsType) => {
    return (
        <div>
            <label><h3>{props.title}</h3>
                <input type={'number'}
                       className={props.className}
                       min={props.min}
                       max={props.max}
                       step={0.2}
                       placeholder={String(props.min)}
                       onChange={props.onChange}/>
                , м
            </label>
        </div>
    )
}