const getListProduct = (idType, page) => {
    let url;
    if (idType !== 'COLLECTION') {
        url = `http://192.168.137.1:1212/app/product_by_type.php?id_type=${idType}&page=${page}`;
    } else {
        url = `192.168.137.1:1212/app/get_collection.php?page=${page}`;
    }
    return fetch(url)
    .then(res => res.json());
};

export default getListProduct;
