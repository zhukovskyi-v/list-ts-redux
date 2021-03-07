import * as React from 'react';
import './filter-button.css'

interface Props {
    active: boolean;
    onClick: () => void;
    children: string;
}

export const FilterButton: React.FC<Props> = ({active, onClick, children}) => {
    const btnClassesName = active ? 'btn-small disabled' : 'waves-effect waves-light btn-small'
    return (<button className={btnClassesName}
                    onClick={onClick}
                    disabled={active}
    >
        {children}
    </button>)
};