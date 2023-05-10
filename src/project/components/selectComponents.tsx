import data from "data/data.json";
import {ChangeEvent} from "react";


type PropsType={
    name: string
    handleChange: (e:ChangeEvent<HTMLSelectElement>)=>void
    title: string
    type: string
    material?: string
}

export const SelectComponents = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <select name={props.type} onChange={props.handleChange}>
                <option>{props.title}</option>
                {props.name==='list' ?
                    data.filter((list) => (list.type === 'list')).map((el, index) => (el.material === props.material as string
                        ? <option key={index} value={el.name}>{el.name}</option> : props.material === 'all'
                            ? <option key={index} value={el.name}>{el.name}</option> : ''))
                    : data.map((pipe, index) => {
                        return pipe.type === 'pipe' ?
                            <option key={index} value={pipe.name}>{pipe.name}</option> : ''})}

            </select>
        </div>

    )
}
