const button = document.getElementById("button");
const voicemode = document.getElementById("voicemode");
const voice = document.getElementById("voice");
button.addEventListener("mouseover", () => {
    document.getElementById("hoverText").style.display = "block";
});
button.addEventListener("mouseout", () => {
    document.getElementById("hoverText").style.display = "none";
});
voicemode.addEventListener("mouseover", () => {
    document.getElementById("hoverTextVoice").style.display = "block";
});
voicemode.addEventListener("mouseout", () => {
    document.getElementById("hoverTextVoice").style.display = "none";
});
voice.addEventListener("mouseover", () => {
    document.getElementById("voicehover").style.display = "block";
});
voice.addEventListener("mouseout", () => {
    document.getElementById("voicehover").style.display = "none";
});
