const BASE_URL = 'https://thatcopy.pw/catapi/rest/';


const getCat = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    }catch(e){
        console.log(e.message);
    }
};


const loadImg = async () =>{
    const img = document.getElementsByTagName('img')[0];
    img.src = await getCat();
};


loadImg();

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);