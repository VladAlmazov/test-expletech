import {memo, useMemo} from 'react';
import {randomColor} from "./List";

const ListHeader = ({checkedItemsLength, onShuffle, checkedIds}) => {

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
