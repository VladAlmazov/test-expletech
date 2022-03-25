import {memo, useState, useCallback} from 'react';

import ListHeader from './ListHeader';
import ListItem from './ListItem';

const initialList = Array.from([1, 2, 3, 4, 5, 6], (value) => ({id: value * +new Date(), value}));
export const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const List = () => {
        const [list, setList] = useState(initialList);
        const [checkedIds, setChecked] = useState([]);

        // Shuffle function(функція перемішувач)
        const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

        const handleShuffle = useCallback(() => setList(shuffle(list)), [list]);

        const handleCheck = useCallback((checked, id) => {
            setChecked(checked
                ? [...checkedIds, id]
                : checkedIds.filter((checkedId) => checkedId !== id),
            );
        }, [checkedIds]);


        return (
            <>
                <ListHeader
                    checkedItemsLength={checkedIds.length}
                    onShuffle={handleShuffle}
                    itemList={list}
                    checkedIds={checkedIds}
                />
                {list.map((item) => {
                        return <ListItem
                            key={item.id}
                            item={item}
                            checkedIds={checkedIds}
                            onCheck={handleCheck}
                        />
                    }
                )}
            </>
        );
    }
;

export default memo(List);
