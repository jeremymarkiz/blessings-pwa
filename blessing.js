// Getting the blessing ID from the url
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Find the corresponding blessing
const blessing = blessings[id];

   
// fontsize settings
let fontScale = 1.0; //1.0 = 100%

// Render blessing if found

function renderBlessing(blessing) {
    const container = document.getElementById("blessing-text");
    container.innerHTML = ''; //clear previous content

    const fields = [
        {key: 'hebrew', className: 'hebrew-text', scale:2 },
        {key: 'transliteration', className: 'transliteration-text', scale:1.5 },
        {key: 'english', className: 'english-text', scale:1.5 }
    ];

    fields.forEach (({
        key, className, scale}) => {
            if (blessing[key]) {
                const el = document.createElement("div");
                el.className = className
                el.textContent = blessing[key];
                el.style.fontSize = `${fontScale * scale}em`;
                container.appendChild(el);
            }
     });
}





//Fontsize buttons
function changeFontSize(multiplier) {
    fontScale *= multiplier;
    
    if (blessing) {
    renderBlessing(blessing);   
    }
}

//initial render
if (blessing) {
        renderBlessing(blessing);

      } else {
            document.getElementById("blessing-text").textContent = "Blessing not Found.";
        }