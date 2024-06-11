const headtxt = document.getElementById('quote');
const api_url = "https://api.quotable.io/random";

async function quote(url)
{
    const response =await fetch(url);
    const data = await response.json();
    console.log(data);
    headtxt.innerText= data.content;
}

