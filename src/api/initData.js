const initData = () => (
    fetch('http://192.168.137.1:1212/app/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;
