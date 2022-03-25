import React, {useMemo} from 'react';
import {randomColor} from "./List";

const ListItem = React.memo(({item: {id, value}, checkedIds, onCheck}) => {

    //Memorised value (Запам'ятовує значення)
    const background = useMemo(() => `#${randomColor()}`, [checkedIds.includes(id)]);

    const handleChange = (e) => onCheck(e.currentTarget.checked, id);

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
})

export default ListItem;
