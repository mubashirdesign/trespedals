
    
    class YearSelector extends HTMLElement {
        constructor() {
          super();
        }
      
        connectedCallback() {

            let year = "";
            let model = "";
            let make = "";

            this.addEventListener('change', (e) => {
              //load years
              //based on years load up models
              if (e.target.id == 'year') {
                year = e.target.value;

                //fetch make based on year
                
                let dropdown = document.querySelector('#make');
                dropdown.length = 0;

                let defaultOption = document.createElement('option');
                defaultOption.text = 'Choose State/Province';

                dropdown.add(defaultOption);
                dropdown.selectedIndex = 0;

                const url = `https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=${year}&sold_in_us=1`;

                fetch(url)  
                  .then(  
                    function(response) {  
                      if (response.status !== 200) {  
                        console.warn('Looks like there was a problem. Status Code: ' + 
                          response.status);  
                        return;  
                      }

                      // Examine the text in the response  
                      response.json().then(function(data) {  
                        let option;
                    
                      for (let i = 0; i < data.length; i++) {
                          option = document.createElement('option');
                          option.text = data[i].name;
                          option.value = data[i].abbreviation;
                          dropdown.add(option);
                      }    
                      });  
                    }  
                  )  
                  .catch(function(err) {  
                    console.error('Fetch Error -', err);  
                  });

              }
          

              if (e.target.id == "make") {
                

                                
                make = e.target.value;


              }

              
              if (e.target.id == "model") {
                model = e.target.value;
                location.href = window.location.origin + `/collections/${year}/${make}/${model}`;
              }

              console.log(window.location.origin + `/collections/${year}/${make}/${model}`)


            })

            console.log('test')
            const productId = '7719574044887';

            // 2. Define GraphQL input
            const getVariantData = () => `{
              products(first:250) {
                edges {
                  node {
                     id,
                     handle,
                     title,
                     description,
                     tags
                  }
                }
              }  
            }`;
            
            // 3. Add component to render variants
            const renderVariants = ({data}) => {
              // fill in as needed
            };
            
            // 4. Define options
            const options = {
              method: "post",
              headers: {
                "Content-Type": "application/graphql",
                "X-Shopify-Storefront-Access-Token": "cbc00dc6a99770032aa9aeb5299f552e"
              },
              body: getVariantData(productId)
            };
            
            // 5. Fetch data
            fetch(`https://trespedals.myshopify.com/api/graphql`, options)
              .then(res => res.json().then((data) => {
                console.log(data)
              }))
        }  
        
      }
      
      customElements.define('year-selector', YearSelector);

