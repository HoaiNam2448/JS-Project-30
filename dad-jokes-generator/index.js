const btnEl = document.getElementById("btn");
const pjokesEl = document.getElementById("jokes");
// 
 const apiKey = "UD5996pV54ehRhqk1ZsiJQ==67po9H9r6chjRaNx"; 
// phản hồi từ api
 const requestUrlDadjoke = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  };

async function getJoke(){
       try {
    // Hieu ung cho innerText va btn.innerText
    pjokesEl.innerText = "Updating..."
    btnEl.disabled = true;
    btnEl.innerText = "loading.."
    const response = await fetch(requestUrlDadjoke,options);
    // chuyển đổi data
    const data = await response.json();
    console.log(data)
    // innerText thay đổi text hiện thị ở p
    
    btnEl.disabled = false;
    btnEl.innerText = "TELL ME THE JOKE"
    
    pjokesEl.innerText = data[0].joke;  
    // Bat loi khi mang khong hoat dong.
    } catch (error) {
        pjokesEl.innerText = "An errow happen, try again later";
        btnEl.disabled = true;
        btnEl.innerText = "TELL ME THE JOKE"
        console.log(error);
    }
}

btnEl.addEventListener("click",getJoke)