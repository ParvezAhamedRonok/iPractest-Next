//make the audio tag sticky when user scroll the page-----


export default function ZindexStatusFunc({setZindexStatus}) {
    window.addEventListener("scroll", function () {
        try {
            if (window.scrollY > 50) {
                setZindexStatus(false)
            } else {
                setZindexStatus(true)
            }
        } catch (error) {
            // console.log("Error has been occoured..")
        }
    })
}