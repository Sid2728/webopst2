

const postfooter = document.querySelector('.postfooter');


const success = (position) => {

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const url = `https://us1.locationiq.com/v1/reverse.php?key=pk.d44e24001546e4679ab30f4f5fdbd6da&lat=${latitude}&lon=${longitude}&format=json`;
    
    
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            const locname = {
                city: data.address.city,
                state: data.address.state,
                postcode: data.address.postcode
            }
            var location = document.createTextNode(locname.city + ', ' + locname.state + ', ' + locname.postcode);

            postfooter.appendChild(location);
        })
};
const error = (error) => {
  
     if (error.code == error.PERMISSION_DENIED) {
        const Error = document.createTextNode("Grant location permission");
        postfooter.appendChild(Error);
    } 
    
};

navigator.geolocation.getCurrentPosition(success, error);