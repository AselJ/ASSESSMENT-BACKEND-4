const fortuneBtn = document.getElementById("fortuneButton")
const form = document.querySelector('form')
const baseURL = `http://localhost:4000/api/fortunes`

const fortuneCallback = ({ data: fortune }) => displayFortunes(fortune)

const errCallback = err => console.log(err)

let fortunes = []

const getFortune = () => {
    // choose getAll fortune
            let randomIndex = Math.floor(Math.random() * fortunes.length);
        axios.get(`${baseURL}/${randomIndex}`)
            .then(res => {
                const data = res.data;
                alert(data);
        });
    };

const getAllFortunes= () => axios.get(baseURL).then(fortuneCallback).catch(errCallback)

const createFortune = body => axios.post(baseURL, body).then(fortuneCallback).catch(errCallback)

const deleteFortune = index => axios.delete(`${baseURL}/${index}`).then(fortuneCallback).catch(errCallback)

const updateFortune = (index, newFortune) => axios.put(`${baseURL}/${index}`, {newFortune}).then(fortuneCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let fortune = document.querySelector('#fortune')
    

    let bodyObj = {
        fortune: fortune.value,

    }
    createFortune(bodyObj)

    fortune.value = ''
    
}


function editFortune(index) {
    const editDiv = document.getElementById('editFortune');
    editDiv.innerHTML = `
        <input type="text" value="${fortunes[index]}" id="editFortuneInput">
        <button onclick="saveFortune(${index})">Save</button>
    `
}
function saveFortune(index) {
    const input = document.getElementById('editFortuneInput')
    const newValue = input.value
    updateFortune(index, newValue);
    input.value = ""
}


function displayFortunes(arr) {
    fortunes = arr;
    console.log(arr)
    const ul = document.getElementById("fortunes");
    ul.innerHTML = ''
    fortunes.forEach((fortune, index) => {
        console.log(fortune, index)
        const li = document.createElement('li')
        li.innerHTML = `
        <span>${fortune}</span>
        
            
        <button onclick="deleteFortune(${index})">delete</button>
        <button onclick="editFortune(${index})">edit</button>
        `
        ul.appendChild(li)
       

    }) 
    console.log(arr);
}

fortuneBtn.addEventListener('click', getFortune);
form.addEventListener('submit', submitHandler);

getAllFortunes()