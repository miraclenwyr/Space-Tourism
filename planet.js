const planetLife = [
    {
        name:"MOON",
        about:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        img:"space-tourism-website-main/starter-code/assets/destination/image-moon.png",
        distance:"384,400 km",
        duration:"3 days",

    },
    {
        name:"MARS",
        about:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        img:"space-tourism-website-main/starter-code/assets/destination/image-mars.png",
        distance:"225 MIL. km",
        duration:"9 months",

    },
    {
        name:"EUROPA",
        about:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        img:"space-tourism-website-main/starter-code/assets/destination/image-europa.png",
        distance: "628 MIL. km",
        duration:"3 years",

    },
    {
        name:"TITAN",
        about:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        img:"space-tourism-website-main/starter-code/assets/destination/image-titan.png",
        distance:"1.6 BIL. km",
        duration:"7 years",

    }
]


function changeplanet(x){
    
    document.getElementById("image").src = planetLife[x].img; 
    document.getElementById("nameofplanet").textContent = planetLife[x].name;
    document.getElementById("description").textContent = planetLife[x].about;
    document.getElementById("distance").textContent = planetLife[x].distance
    document.getElementById("duration").textContent = planetLife[x].duration;
    
}

// console.log(changeplanet(x));

// document.getElementById('image').addEventListener('click', function () {
//     return this.classList.add('various-planets')
// })
