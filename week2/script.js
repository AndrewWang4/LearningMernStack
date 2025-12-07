const button = document.getElementById("button");
const voicemode = document.getElementById("voicemode");
const voice = document.getElementById("voice");
const input = document.getElementById("inputtext");
const upload = document.getElementById("uploadmessage");
const disableid = document.getElementById("disable");
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
input.addEventListener("input", value);
/*
document.getElementById("voicemode").style.display = "none";
document.getElementById("voicehover").style.display = "none";
document.getElementById("inputtext").style.display = "block";
document.getElementById("disable").style.display = "block";
*/
function value(e) {
    if (e.target.value.length === "") {
        console.log("Found nothing.")
        document.getElementById("voicemode").style.display = "block";
        document.getElementById("uploadmessage").style.display = "none";
        document.getElementById("disable").style.display = "none";
    } else {
        console.log("Text typed.")
        document.getElementById("voicemode").style.display = "none";
        document.getElementById("voicehover").style.display = "none";
        document.getElementById("uploadmessage").style.display = "block";
        document.getElementById("disable").style.display = "block";
    }
}
import { GoogleGenAI } from "https://esm.run/@google/genai";
const ai = new GoogleGenAI({
apiKey: "AIzaSyCX1kqaLlfU67RkY2nP7Y1hAPavY2D6Hh4",
});
async function main() {
const response = await ai.models.generateContent({
model: "gemini-2.5-flash",
contents: input,
});
print(response.text);
}
await main();
