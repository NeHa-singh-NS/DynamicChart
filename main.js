    const reach = document.querySelector('.reach-input');
    const engagement = document.querySelector('.engagement-input');
    const clicks = document.querySelector('.clicks-input');
    const sales = document.querySelector('.sales-input');
    const message = document.querySelector('.message-input');
    const video = document.querySelector('.video-input');
    

    

    
    
    const ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx,{
    
      type:'bar',
      data: {
    
        labels: ['Reach' ,
                'Engagement',
                'Clicks',
                'Sales Value',
                'Messages',
                'Video Views',
                
                ],
        datasets : [
          {
    
            label:'Social Media Report'+element.date,
            data : [0,0,0,0,0,0],
            backgroundColor:['#2adece', '#dd3b79', '#ff766b', '#fd79a8', '#a29bfe', '#eccc68'],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
            borderWidth:2
          }
          
        ]
    
      },
      options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    
    });
    
    
    const updateChartValue =(input, dataOrder)=> {
    
      input.addEventListener ('change', e => {
        myChart.data.datasets[0].data[dataOrder] = e.target.value;
        myChart.update();
      });

      
    
    };

    //get the input date by the user
   
    



    
    updateChartValue(reach,0);
    updateChartValue(engagement, 1);
    updateChartValue(clicks, 2);
    updateChartValue(sales, 3);
    updateChartValue(message, 4);
    updateChartValue(video, 5);
    

     
   
element = document.getElementById("dateInput");
    
      element.addEventListener("change", function() {
        let input = this.value;
        let result = new Date(input);
        let dateEntered = result.toDateString();
        
      
      // console.log(input);
        console.log(dateEntered);
    })


 


    
   
      
    


 






