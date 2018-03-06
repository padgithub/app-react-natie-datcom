const searchProduct = (key) => {
    const url = `http://192.168.137.1:1212/app/search.php?key=${key}`;
    return fetch(url)
    .then(res => res.json());
};

export default searchProduct;
