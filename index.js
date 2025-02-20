// https://www.thecolorapi.com

// INIT
const colorContainer = document.getElementById('color-container')
const colorSchemeBtn = document.getElementById('color-scheme-btn')


// COLOR SCHEME BTN CLICK EVENTLISTENR
colorSchemeBtn.addEventListener('click', function(){
    let inputColorHexValue = document.getElementById('input-color').value.replace("#", "")
    let selectListLowerCaseValue = document.getElementById('select-list').value.toLowerCase()

    // GET COLOR API ACCORDING TO USER INPUT HEX VALUE AND MODE OPTION
    fetch(`https://www.thecolorapi.com/scheme?hex=${inputColorHexValue}&mode=${selectListLowerCaseValue}`, {method:"GET"})
        .then(response => response.json())
        .then(data => {
            let htmlStr = ""
            console.log(data)
            data.colors.map(function(colours){
                htmlStr += `
                <div class="image-container">
                    <img class="colour-img" src="${colours.image.bare}">
                    <p>${colours.hex.value}</p>
                </div>`
            })

            colorContainer.innerHTML = htmlStr
        })
})
