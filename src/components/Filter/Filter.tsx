import { useEffect, useState } from "react";
import cn from "classnames"

interface FilterProps {
    items: string[],
    handleFilterChange: (filter: string[]) => void
}

const Filter: React.FC<FilterProps> = ({ items, handleFilterChange }) => {
    const [filters, setFilters] = useState<string[]>([]);

    useEffect(() => {
        if (!!filters)
            handleFilterChange(filters)
    }, [filters])

    const onFilterChange = (filterName: string) => {
        const index = filters.findIndex(filter => filter === filterName);
        if (index >= 0) {
            const temp = filters.filter(x => x != filterName);
            setFilters(temp)
        }
        else {
            setFilters(prev => {
                return [...prev, filterName]
            })
        }
    }

    return (
        <div className="flex flex-row gap-3 items-center">
            Filters :
            {items.map(filter => {
                return <div key={filter} className={cn("text-center bg-slate-300 p-2 rounded-md cursor-pointer", filters.filter(x => x === filter).length == 1 && "bg-slate-400")} onClick={() => onFilterChange(filter)}>
                    {filter}
                </div>
            })}
        </div>
    )
}

export default Filter