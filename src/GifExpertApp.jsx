import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export default function GifExpertApp() {
    const [categories, setCategories] = useState(['Perro'])

    const onAddCategory = (newCaterogy) => {

        if (categories.includes(newCaterogy)) return;

        setCategories([newCaterogy, ...categories])
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={event => onAddCategory(event)}
            />
            {categories.map((category) => (
                <GifGrid
                    key={category}
                    category={category} />
            ))}
        </>
    )
}
