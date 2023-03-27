const shareBtn = document.querySelectorAll(".share-btn");
const share = document.querySelector(".share");

const toggleItem = () => {
    if (share.classList.contains("hidden")){
        share.classList.remove("hidden")
        shareBtn.forEach((element) => {
            element.classList.add("active");
        });
        // shareBtn.classList.add("active");
    }else{
        share.classList.add("hidden");
        shareBtn.forEach((element) => {
            element.classList.remove("active");
        });
    };
}

shareBtn.forEach((element) => {
    element.addEventListener("click", toggleItem)
});