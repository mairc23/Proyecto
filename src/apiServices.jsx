export const fetchLocalData = async (option) => {
    try {
        var response;
        if (option === 'Zapatillas') response = await fetch('/src/assets/data/tenis.json');
        else response = await fetch("/src/assets/data/ropa.json");
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching local data', error);
        throw error;
    }
};

