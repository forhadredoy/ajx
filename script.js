function myCountries(){

    let xhr = new XMLHttpRequest()

    xhr.open('Get','https://restcountries.com/v3.1/all',true)

    xhr.onload = function () {
         if(xhr.status == 200){

            console.log("success")
            let countries =JSON.parse(this.response)
            console.log(countries)

            countries.forEach( (country)=> {

                var con1 = document.createElement('div')

                con1.innerHTML = country.name

                document.getElementById('country').appendChild(con1)
                
            });
         } 
    }
    xhr.send()
}
   