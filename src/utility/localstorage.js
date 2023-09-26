const getStoredDonateData = () => {
    const storedDonateData = localStorage.getItem('donation-data');
    if (storedDonateData){
        return JSON.parse(storedDonateData);
    }
    return [];
}


const saveDonateData = id =>{
        const storedDonateData = getStoredDonateData();
        const exists = storedDonateData.find(donateId => donateId === id);

    if (!exists){
        storedDonateData.push(id);
        localStorage.setItem('donation-data', JSON.stringify(storedDonateData));
    }
}

export { getStoredDonateData, saveDonateData }