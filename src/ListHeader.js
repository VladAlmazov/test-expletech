import {memo, useMemo} from 'react';
import {randomColor} from "./List";

const ListHeader = ({checkedItemsLength, onShuffle, checkedIds}) => {

    //Memorised value if checkedIds don't changes (Запам'ятовує значення, якщо checkedIds не змінюється)
    const background = useMemo(() => `#${randomColor()}`, [checkedIds]);

    return <>
        <div style={{background}}>
            Checked: {checkedItemsLength}; renderID: {background.slice(1)}
        </div>
        <div>
            <button onClick={onShuffle}>Shuffle</button>
        </div>
    </>
};

export default memo(ListHeader);
