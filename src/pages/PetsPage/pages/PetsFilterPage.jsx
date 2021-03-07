import React from 'react'
import SearchBar from '../../../shared/SearchBar/SearchBar'
import PetsGallery from '../components/PetsGallery/PetsGallery'

export default function PetsFilterPage() {
    return (
        <div>
            <SearchBar></SearchBar>
            <PetsGallery></PetsGallery>
        </div>
    )
}
