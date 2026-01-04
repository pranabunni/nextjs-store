'use client';
import {Input} from "@/components/ui/input";
import {useCallback, useEffect, useState} from "react";
import {debounce} from "@/lib/utils";
import {useSearchParams, useRouter} from "next/navigation";

export default function SearchInput() {
    const searchParams = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("search") || '');
    const { replace } = useRouter();

    useEffect(() => {
        if (!searchParams.get('search')) {
            setSearch('');
        }
    }, [searchParams.get('search')]);

    const handleSearch = (value: string) => {
        console.log('value', value);
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set('search', value);
        } else {
            params.delete('search');
        }
      replace(`/products?${params.toString()}`);
    }
  const handleChange = useCallback(debounce(handleSearch), []);
    return (
        <Input type="search" placeholder="Search your product..."
               className='max-w-xs dark:bg-muted'
                 value={search}
               onChange={e => {
                    setSearch(e.target.value);
                   handleChange(e.target.value);
               }} />
    )
}