const meetingBanBtn = document.querySelector("#meetingBanBtn")
const meetingBanner = document.querySelector("#meetingBanner")

function meetingBannerDisplay() {
    const day = new Date().getDay
    
    if (day >=1 && day <=3) {
        meetingBanner.classList.toggle("show")
    } else {
        meetingBanner.classList.toggle("close")
    }
}
meetingBannerDisplay()

meetingBanBtn.addEventListener("click", () => {
    meetingBanner.classList.toggle("close")
});
