import React, {useCallback, useMemo} from 'react';
import {randomColor} from "./List";

const ListItem = ({item: {id, value}, checkedIds, onCheck}) => {

    console.log('RENDER')

    //Memorised value (Запам'ятовує значення)
    const background = useMemo(() => `#${randomColor()}`, [checkedIds.includes(id)]);

    const handleChange = useCallback((e) => onCheck(e.currentTarget.checked, id), [id])

    return (
        <div style={{userSelect: 'none', background}}>
            <input
                id={id}
                type="checkbox"
                checked={checkedIds.includes(id)}
                onChange={handleChange}
            />
            <label htmlFor={id}> {value}; renderID: {background} </label>
        </div>
    );
}

const compareFn = (prevProps, nextProps) => {
    return nextProps.checkedIds.includes(nextProps.item.id) === prevProps.checkedIds.includes(prevProps.item.id)
}

export default React.memo(ListItem, compareFn);
