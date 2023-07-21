function getLocation(){
    return new Promise((resolve, reject) => {
        let successCallback = (position) => {
            resolve(position) ;
        }
        let errorCallback = (error) => {
            reject(error);
        }
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    })
}

let locationPromise = getLocation();

locationPromise.then((position) => {
    let lat = position.coords.latitude
    let lng = position.coords.longitude
    return `Latitude: ${lat} && Longitude: ${lng}`;
}).then((data) => {
    let p = document.createElement("p");
    p.innerText = data ;
    p.style.fontWeight = "bold";
    p.style.fontSize = "30px";
    document.body.appendChild(p);
}).catch((error) => {
    console.log(error)
    document.write("<h1>Failed to fetch locatioon </h1>");
})


let a = new Promise((resolve, reject) => {
    setTimeout(() => {
       reject("Dinesh")
    }, 2000)
})
let b = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("2")
    }, 1000)
})
let c = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("c")
    }, 1000)
})

let x = Promise.race([a, b, c]);
let y = Promise.any([a, b, c]);
let z = Promise.all([a, b, c]);

setTimeout(() => {
    console.log(x);
    console.log(y);
    console.log(z);
}, 3000);

