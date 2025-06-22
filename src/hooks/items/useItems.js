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
            try {
                const response = await fetch('http://localhost/store/fetchItems.php');
                // GET is the default method
                // const response = await fetch('http://localhost/store/fetchItems.php', {
                //     method: 'GET'
                // });
                if (!response.ok) throw new Error(`Response Status: ${response.status}`);
                
                const data = await response.json();
                
                // convert each object into instance
                const itemInstances = data.items.map(item => new Item(item));
                setItems(itemInstances);
            } catch (error) {
                console.error('something went wrong in fetchItems:', error);
            }
        };
        fetchItems();
    }, []);

    return { items };
};