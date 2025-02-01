"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AppBar, Toolbar, Typography, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import styles from '@/app/styles/appBar.module.css'

const AppHeader = () => {
    const router = useRouter();
    const params = useSearchParams();
    
    const query = params.get("query") || '';
    const [searchQuery, setSearchQuery] = useState(query);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/?query=${encodeURIComponent(searchQuery)}`);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                    <Link href="/" passHref>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, whiteSpace: "nowrap" }}> Apartment Finder </Typography>
                    </Link>
                
                <form onSubmit={handleSearch}>
                    <div className={styles.searchInputContainer}>
                        <IconButton type="submit" aria-label="search" sx={{ color: 'white' }}>
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            placeholder="Search apartments..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            sx={{ color: 'white', width: '200px' }}
                        />
                    </div>
                </form>
            </Toolbar>
        </AppBar>
    );
}

export default  AppHeader;