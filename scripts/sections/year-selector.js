
    
    class YearSelector extends HTMLElement {
        constructor() {
          super();
        }
      
        connectedCallback() {

            let year = "";
            let model = "";
            let make = "";


            //get all the years from carqueryapi.com and populate the year selector
            fetch("https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getYears")
            .then(response => response.json())
            .then(data => {
             
                console.log(data)
            })
            .catch(error => console.log(error));


        
      }

    }
      
      customElements.define('year-selector', YearSelector);

