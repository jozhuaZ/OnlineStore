// import { useEffect, useState } from 'react';

// export default function useItems() {
//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         async function fetchItems() {
//             try {
//                 const res = await fetch('/api/items'); // Or your actual API endpoint
//                 const data = await res.json();
//                 setItems(data);
//             } catch (err) {
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         }

//         fetchItems();
//     }, []);

//     return { items, loading, error };
// }
import Item from '../../models/Item';
import { useState, useEffect } from 'react';

export default function useItems () {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            // fetch items from database
        };
        fetchItems();
    }, []);
};