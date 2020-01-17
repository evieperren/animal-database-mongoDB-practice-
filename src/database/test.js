const trial = async () => {
    fetch('http://localhost:3000/')
    .then(res => res.json())
    .then(json => console.log(json))
}

trial()
document.getElementById('text').innerHTML = JSON.stringify(res)