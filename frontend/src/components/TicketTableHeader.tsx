import React from 'react';

type Props = {
    headings: string[]
}

const TicketTableHeader: React.FC<Props> = ({ headings }) => {
    return (
        <div className="table-row heading">
            {headings.map((name: string, i: number) => <div className="row-item" key={i}>
                {name}</div>)}
        </div>
    )
}

export default TicketTableHeader;