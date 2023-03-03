function fontAutosize () {
    let titles = document.querySelectorAll(".card-title")

    titles.forEach((title) => {
        let charCount = title.innerText.length
        console.log(charCount)
    
        if (charCount <= 25) {
            title.style.fontSize = "25px"
        } else if (charCount > 25 && charCount <=35){
            title.style.fontSize = "22px"
        } else if (charCount > 35 && charCount <=50){
            title.style.fontSize = "20px"
        } else if (charCount > 50 && charCount <=65){
            title.style.fontSize = "18px"
        } else if (charCount > 65 && charCount <=75){
            title.style.fontSize = "16px"
        } else if (charCount > 75){
            title.style.fontSize = "14px"
        }
    })
    }

    function fontAutosizeSmallView () {
        let titles = document.querySelectorAll(".list-card-title")
    
        titles.forEach((title) => {
            let charCount = title.innerText.length
            console.log(charCount)
        
            if (charCount <= 25) {
                title.style.fontSize = "6.5vw"
            } else if (charCount > 25 && charCount <=35){
                title.style.fontSize = "6vw"
            } else if (charCount > 35 && charCount <=50){
                title.style.fontSize = "5.5vw"
            } else if (charCount > 50 && charCount <=65){
                title.style.fontSize = "5vw"
            } else if (charCount > 65 && charCount <=75){
                title.style.fontSize = "4.5vw"
            } else if (charCount > 75){
                title.style.fontSize = "4vw"
            }   
        })
        }

    function activateFlex(){
        let toggle = 0
        let container = document.querySelectorAll(".top-article-dropdown-menu")

    }
fontAutosize()
fontAutosizeSmallView()