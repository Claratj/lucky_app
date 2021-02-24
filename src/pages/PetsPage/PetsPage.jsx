import React from 'react';
import SearchBar from '../../shared/SearchBar/SearchBar';
import PetsGallery from './components/PetsGallery';


export default function PetsPage() {
    return (
        <div>
            <SearchBar></SearchBar>
            <PetsGallery></PetsGallery>
        </div>
    )
}
