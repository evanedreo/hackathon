
//BUTTONS
const buttonvisual = document.querySelector("#vbutton");
const buttonplan = document.querySelector("#pbutton");
const buttonstats = document.querySelector("#sbutton");

let onpage = buttonvisual

//PAGES
const visualize = document.querySelector("#one");
const plan = document.querySelector("#two");
const stats = document.querySelector("#three");

const setup = () => {
    console.log("Staring Up!")
    visualize.classList.remove("hide");
    plan.classList.add("hide");
    stats.classList.add("hide");
    buttonvisual.classList.add("selected")
}

const changeLabels = (button) => {
    onpage.classList.remove("selected");
    button.classList.add("selected");
    onpage = button;
}

buttonvisual.addEventListener("click", (e) => {

    visualize.classList.remove("hide");
    plan.classList.add("hide");
    stats.classList.add("hide");
    changeLabels(buttonvisual);
});

buttonplan.addEventListener("click", (e) => {

 
    plan.classList.remove("hide");
    visualize.classList.add("hide");
    stats.classList.add("hide");
    changeLabels(buttonplan);
});

buttonstats.addEventListener("click", (e) => {


    stats.classList.remove("hide");
    visualize.classList.add("hide");
    plan.classList.add("hide");
    changeLabels(buttonstats);
})


// 'Elm Tree': 'rgb(255, 99, 132)'
// 'Birch Tree': 'rgb(219, 237, 166)'
// 'Willow Tree': 'rgb(129, 240, 96)'
// 'Fir Tree': 'rgb(38, 143, 7)'
// 'Oak Tree': 'rgb(171, 106, 15)'
// 'Beech Tree': 'rgb(219, 222, 38)'
// 'Pine Tree': 'rgb(26, 201, 140)'
// 'Maple Tree': 'rgb(227, 66, 66)'

const elmbutton = document.querySelector("#elm");
const birchbutton = document.querySelector("#birch");
const willowbutton = document.querySelector("#willow");
const furbutton = document.querySelector("#fir");
const oakbutton = document.querySelector("#oak");
const beechbutton = document.querySelector("#beech");
const pinebutton = document.querySelector("#pine");
const maplebutton = document.querySelector("#maple");




//DO THE CHARTS
let species = []

const data1 = {
    labels: ["One", "Two", "Three", "Four", "Five", "Six", "Seven"],

    datasets: [
        {
            label: 'Elm Tree',
            data: [{"age": 232, "volume": 11309}, {"age": 174, "volume": 9952}, {"age": 263, "volume": 16625}, {"age": 280, "volume": 17520}, {"age": 160, "volume": 14162}, {"age": 296, "volume": 10643}, {"age": 228, "volume": 8494}, {"age": 209, "volume": 10643}, {"age": 165, "volume": 50}, {"age": 252, "volume": 12930}, {"age": 211, "volume": 10263}, {"age": 246, "volume": 351}, {"age": 210, "volume": 1583}, {"age": 240, "volume": 3619}, {"age": 147, "volume": 6283}, {"age": 159, "volume": 7853}, {"age": 202, "volume": 14476}, {"age": 216, "volume": 3817}, {"age": 182, "volume": 4398}, {"age": 237, "volume": 11149}, {"age": 169, "volume": 12063}, {"age": 237, "volume": 4561}, {"age": 194, "volume": 2463}, {"age": 207, "volume": 4156}, {"age": 191, "volume": 1256}, {"age": 218, "volume": 4071}, {"age": 195, "volume": 5852}, {"age": 155, "volume": 6597}, {"age": 270, "volume": 4580}, {"age": 110, "volume": 9500}, {"age": 67, "volume": 7225}, {"age": 134, "volume": 13546}, {"age": 119, "volume": 6283}, {"age": 210, "volume": 7602}, {"age": 168, "volume": 2670}, {"age": 197, "volume": 4624}],
            borderColor: '#407A64',
            backgroundColor: '#B5D8C5',
        }
        // {
        //     label: 'Birch Tree',
        //     data: [{"age": 232, "volume": 11309}, {"age": 174, "volume": 9952}, {"age": 263, "volume": 16625}, {"age": 280, "volume": 17520}, {"age": 160, "volume": 14162}, {"age": 296, "volume": 10643}, {"age": 228, "volume": 8494}, {"age": 209, "volume": 10643}, {"age": 165, "volume": 50}, {"age": 252, "volume": 12930}, {"age": 211, "volume": 10263}, {"age": 246, "volume": 351}, {"age": 210, "volume": 1583}, {"age": 240, "volume": 3619}, {"age": 147, "volume": 6283}, {"age": 159, "volume": 7853}, {"age": 202, "volume": 14476}, {"age": 216, "volume": 3817}, {"age": 182, "volume": 4398}, {"age": 237, "volume": 11149}, {"age": 169, "volume": 12063}, {"age": 237, "volume": 4561}, {"age": 194, "volume": 2463}, {"age": 207, "volume": 4156}, {"age": 191, "volume": 1256}, {"age": 218, "volume": 4071}, {"age": 195, "volume": 5852}, {"age": 155, "volume": 6597}, {"age": 270, "volume": 4580}, {"age": 110, "volume": 9500}, {"age": 67, "volume": 7225}, {"age": 134, "volume": 13546}, {"age": 119, "volume": 6283}, {"age": 210, "volume": 7602}, {"age": 168, "volume": 2670}, {"age": 197, "volume": 4624}],
        //     borderColor: 'rgb(219, 237, 166)',
        //     backgroundColor: 'rgb(219, 237, 166)',
        // },
        // {
        //     label: 'Dataset 2',
        //     data: [35, 20, 25, 11, 14, 9, 6],
        //     borderColor: 'rgb(129, 240, 96)',
        //     backgroundColor: 'rgb(129, 240, 96)',
        // },
        // {
        //     label: 'Dataset 2',
        //     data: [35, 20, 25, 11, 14, 9, 6],
        //     borderColor: 'rgb(38, 143, 7)',
        //     backgroundColor: 'rgb(38, 143, 7)',
        // },
        // {
        //     label: 'Dataset 2',
        //     data: [35, 20, 25, 11, 14, 9, 6],
        //     borderColor: 'rgb(171, 106, 15)',
        //     backgroundColor: 'rgb(171, 106, 15)',
        // },
        // {
        //     label: 'Dataset 2',
        //     data: [35, 20, 25, 11, 14, 9, 6],
        //     borderColor: 'rgb(219, 222, 38)',
        //     backgroundColor: 'rgb(219, 222, 38)',
        // },
        // {
        //     label: 'Dataset 2',
        //     data: [35, 20, 25, 11, 14, 9, 6],
        //     borderColor: 'rgb(26, 201, 140)',
        //     backgroundColor: 'rgb(26, 201, 140)',
        // },
        // {
        //     label: 'Dataset 2',
        //     data: [35, 20, 25, 11, 14, 9, 6],
        //     borderColor: 'rgb(227, 66, 66)',
        //     backgroundColor: 'rgb(227, 66, 66)',
        // },
    ]
};

const configscatter = {
    type: 'scatter',
    data: data1,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                // text: 'Tree Age vs Volume Scatter'
            }
            
        },
        parsing: {
            xAxisKey: 'age',
            yAxisKey: 'volume'
        },

    },
};

const data2 = {
    labels: ["One", "Two", "Three", "Four", "Five", "Six", "Seven"],

    datasets: [
        {
            label: 'Elm Tree Height',
            data: [{"x": 12, "y": 11309}, {"x": 12, "y": 9952}],
            borderColor: 'rgb(, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132)',
            yAxisID: 'y',
            ticks: {
                color: 'rgb(255, 99, 132)',
              },
        },
        {
            label: 'Elm Tree Volume',
            data: [{"radius": 12, "volume": 11309}, {"radius": 12, "volume": 9952}, {"radius": 14, "volume": 16625}, {"radius": 13, "volume": 17520}, {"radius": 14, "volume": 14162}, {"radius": 11, "volume": 10643}, {"radius": 13, "volume": 8494}, {"radius": 11, "volume": 10643}, {"radius": 1, "volume": 50}, {"radius": 14, "volume": 12930}, {"radius": 11, "volume": 10263}, {"radius": 2, "volume": 351}, {"radius": 6, "volume": 1583}, {"radius": 8, "volume": 3619}, {"radius": 10, "volume": 6283}, {"radius": 10, "volume": 7853}, {"radius": 12, "volume": 14476}, {"radius": 9, "volume": 3817}, {"radius": 10, "volume": 4398}, {"radius": 13, "volume": 11149}, {"radius": 16, "volume": 12063}, {"radius": 11, "volume": 4561}, {"radius": 7, "volume": 2463}, {"radius": 7, "volume": 4156}, {"radius": 4, "volume": 1256}, {"radius": 9, "volume": 4071}, {"radius": 9, "volume": 5852}, {"radius": 10, "volume": 6597}, {"radius": 9, "volume": 4580}, {"radius": 12, "volume": 9500}, {"radius": 10, "volume": 7225}, {"radius": 14, "volume": 13546}, {"radius": 10, "volume": 6283}, {"radius": 11, "volume": 7602}, {"radius": 5, "volume": 2670}, {"radius": 8, "volume": 4624}],
            borderColor: 'rgb(219, 237, 166)',
            backgroundColor: 'rgb(219, 237, 166)',
            yAxisID: 'y2',
            ticks: {
                color: 'rgb(219, 237, 166)',
              },
        },
       
    ]
};
const configscattermulti = {
    type: 'scatter',
    data: data2,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Age vs Height vs Volume Scatter Chart'
            }
            
        },
        parsing: {
            xAxisKey: 'radius',
            // yAxisKey: 'volume'
        },
        scales: {
            y: {
                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                position: 'left',
                ticks: {
                    color: 'rgb(209, 70, 48)',
                }
            },
            y2: {
                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                position: 'right',
                ticks: {
                    color: 'rgb(57, 148, 204)',
                },
                grid: {
                    drawOnChartArea: false // only want the grid lines for one axis to show up
                }
            }
          }

    },
};

const data3 = {
    labels: ['0%-20%', '21%-40%', '41%-60%', '61%-80%', '81%-100%'],

    datasets: [
        {
            label: 'Has Surface Roots',
            data: [8.61, 0, 0, 0, 0],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: '#407A64',

        },
        {
            label: 'No Surface Roots',
            data: [8.64, 11.0, 0, 0, 0],
            borderColor: 'rgb(219, 237, 166)',
            backgroundColor: '#B5D8C5',

        },
        
    ]
};

const configbar = {
    type: 'bar',
    data: data3,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
        //   text: 'Trunk Wounds Vs. Mushrooms'
        }
      }
    },
};

const data4 = {
    labels: ["One", "Two", "Three", "Four", "Five"],

    datasets: [
        {
            label: 'Elm Tree',
            data: [{"height": 232, "volume": 11309, "r": 30}, {"height": 174, "volume": 9952, "r": 26}, {"height": 263, "volume": 16625, "r": 44}, {"height": 280, "volume": 17520, "r": 47}, {"height": 160, "volume": 14162, "r": 38}, {"height": 296, "volume": 10643, "r": 28}, {"height": 228, "volume": 8494, "r": 22}, {"height": 209, "volume": 10643, "r": 28}, {"height": 165, "volume": 50, "r": 0}, {"height": 252, "volume": 12930, "r": 34}, {"height": 211, "volume": 10263, "r": 27}, {"height": 246, "volume": 351, "r": 0}, {"height": 210, "volume": 1583, "r": 4}, {"height": 240, "volume": 3619, "r": 9}, {"height": 147, "volume": 6283, "r": 16}, {"height": 159, "volume": 7853, "r": 21}, {"height": 202, "volume": 14476, "r": 39}, {"height": 216, "volume": 3817, "r": 10}, {"height": 182, "volume": 4398, "r": 11}, {"height": 237, "volume": 11149, "r": 30}, {"height": 169, "volume": 12063, "r": 32}, {"height": 237, "volume": 4561, "r": 12}, {"height": 194, "volume": 2463, "r": 6}, {"height": 207, "volume": 4156, "r": 11}, {"height": 191, "volume": 1256, "r": 3}, {"height": 218, "volume": 4071, "r": 10}, {"height": 195, "volume": 5852, "r": 15}, {"height": 155, "volume": 6597, "r": 17}, {"height": 270, "volume": 4580, "r": 12}, {"height": 110, "volume": 9500, "r": 25}, {"height": 67, "volume": 7225, "r": 19}, {"height": 134, "volume": 13546, "r": 36}, {"height": 119, "volume": 6283, "r": 16}, {"height": 210, "volume": 7602, "r": 20}, {"height": 168, "volume": 2670, "r": 7}, {"height": 197, "volume": 4624, "r": 12}],
            borderColor: '#407A64',
            backgroundColor: '#B5D8C5',

        },

        
    ]
};

const configbubble = {
    type: 'bubble',
    data: data4,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
        //   text: 'Height Vs. Volume Vs. Profit Bubble Chart'
        }
      },

      parsing: {
        xAxisKey: 'height',
        yAxisKey: 'volume',
        rAxisKey: 'profit',
    },
    },
  };



var scatterChart = new Chart(document.querySelector('#scatterChart'),configscatter);
var scattermultiChart = new Chart(document.querySelector('#scattermultiChart'),configscattermulti);
var barchart = new Chart(document.querySelector('#barChart'),configbar);
var bubblechart = new Chart(document.querySelector('#bubbleChart'),configbubble);


const setCharts = () =>{
    scatterChart.destroy();
    scattermultiChart.destroy();
    barchart.destroy();
    bubblechart.destroy();
    configscatter.data = data1;
    configscattermulti.data = data2;
    configbar.data = data3;
    configbubble.data = data4;
    scatterChart = new Chart(document.querySelector('#scatterChart'),configscatter);
    scattermultiChart = new Chart(document.querySelector('#scattermultiChart'),configscattermulti);
    barchart = new Chart(document.querySelector('#barChart'),configbar);
    bubblechart = new Chart(document.querySelector('#bubbleChart'),configbubble);
}

const apitest = (data) => {
    console.log(data);
    console.log(data[0]);
    console.log(data[0].height);
}

const getGraph = (graphnumber, specie) =>{
    let url = "http://127.0.0.1:8000/graph" + graphnumber + "/" + specie;
    fetch(url).then((response) => {console.log(response); return response.json()}).then((data) => {
        if(graphnumber == 1){
            console.log("HEYY", data)
            data1.datasets[0].data = data;
            data1.datasets[0].label = species[specie-1]
        }
        else if(graphnumber == 3){
            console.log("YAYY")
            data3.datasets[0].data = data[0];
            data3.datasets[1].data = data[1];
        }
        else if(graphnumber == 4){
            data4.datasets[0].label = species[specie-1];
            data4.datasets[0].data = data;
        }

        console.log(data1.datasets[0].data);
        setCharts();

    });


}

const getspecies = fetch("http://127.0.0.1:8000/species").then((response) => {return response.json()}).then((data) => {

    for(let i = 0; i < data.length; i++){
        species[i] = data[i][i+1];
        // data1.datasets[i].label = species[i];

    }
    console.log("SPECIES ARE" + species[0]);

});


elmbutton.addEventListener("click", (e) => {
    getGraph(1,1);
    getGraph(2,1);
    getGraph(3,1);
    getGraph(4,1);
});

birchbutton.addEventListener("click", (e) => {
    getGraph(1,2);
    getGraph(2,1);
    getGraph(3,2);
    getGraph(4,2);
});



willowbutton.addEventListener("click", (e) => {
    getGraph(1,3);
    getGraph(2,1);
    getGraph(3,3);
    getGraph(4,3);
});

furbutton.addEventListener("click", (e) => {
    getGraph(1,4);
    getGraph(2,1);
    getGraph(3,4);
    getGraph(4,4);
});

oakbutton.addEventListener("click", (e) => {
    getGraph(1,5);
    getGraph(2,1);
    getGraph(3,5);
    getGraph(4,5);
});

beechbutton.addEventListener("click", (e) => {
    getGraph(1,6);
    getGraph(2,1);
    getGraph(3,6);
    getGraph(4,6);
});

pinebutton.addEventListener("click", (e) => {
    getGraph(1,7);
    getGraph(2,1);
    getGraph(3,7);
    getGraph(4,7);
});

maplebutton.addEventListener("click", (e) => {
    getGraph(1,8);
    getGraph(2,1);
    getGraph(3,8);
    getGraph(4,8);
});



// 'Elm Tree': 'rgb(255, 99, 132)'
// 'Birch Tree': 'rgb(219, 237, 166)'
// 'Willow Tree': 'rgb(129, 240, 96)'
// 'Fir Tree': 'rgb(38, 143, 7)'
// 'Oak Tree': 'rgb(171, 106, 15)'
// 'Beech Tree': 'rgb(219, 222, 38)'
// 'Pine Tree': 'rgb(26, 201, 140)'
// 'Maple Tree': 'rgb(227, 66, 66)'

const datastatsone = {
    labels: ["Elm Tree", "Birch Tree", "Willow Tree", "Fir Tree", "Oak Tree", "Beech Tree", "Pine Tree", "Maple Tree"],

    datasets: [
        {
            label: ['Profit'],
            data: [27, 50, 33, 29, 32, 41, 37, 50],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: '#B5D8C5',

        },

        
    ]
};

const configbarstatsone = {
    type: 'bar',
    data: datastatsone,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Tree Profits'
        }
      }
    },
};

const datastatstwo = {
    labels: ["Elm Tree", "Birch Tree", "Willow Tree", "Fir Tree", "Oak Tree", "Beech Tree", "Pine Tree", "Maple Tree"],

    datasets: [
        {
            label: ['Abundence %'],
            data: [4.0, 13.0, 12.0, 6.0, 8.0, 12.0, 18.0, 26.0],
            borderColor: 'rgb(37, 219, 98)',
            backgroundColor: '#B5D8C5',

        },

        
    ]
};

const configbarstatstwo = {
    type: 'bar',
    data: datastatstwo,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Tree Abundence'
        }
      }
    },
};



const elmbuttonstats = document.querySelector("#elmstats");
const birchbuttonstats = document.querySelector("#birchstats");
const willowbuttonstats = document.querySelector("#willowstats");
const furbuttonstats = document.querySelector("#firstats");
const oakbuttonstats = document.querySelector("#oakstats");
const beechbuttonstats = document.querySelector("#beechstats");
const pinebuttonstats = document.querySelector("#pinestats");
const maplebuttonstats = document.querySelector("#maplestats");

const namestats = document.querySelector("#namestats");
const abundencestats = document.querySelector("#abundencestats");
const profitsstats = document.querySelector("#profitsstats");
const maxheightstats = document.querySelector("#maxheightstats");
const moisturestats = document.querySelector("#moisturestats");
const soilstats = document.querySelector("#soilstats");
const shadestats = document.querySelector("#shadestats");
const imglink = document.querySelector("#imagestats");




var chartstatsone = new Chart(document.querySelector("#statsChartone"), configbarstatsone);
var chartstatstwo = new Chart(document.querySelector("#statsCharttwo"), configbarstatstwo);


const getStats = (specie) => {
    let url = 'http://127.0.0.1:8000/species_data/' + specie;
    fetch(url).then((response) => {return response.json()}).then((data) => {
        console.log(data[0][0].name);
        namestats.innerHTML = "Name: " + data[0][0].name;
        abundencestats.innerHTML = "Abundence: " + data[0][0].abundence;
        profitsstats.innerHTML = "Profits: " + data[0][0].profits;
        maxheightstats.innerHTML = "Max Height: " + data[0][0].max_height;
        moisturestats.innerHTML = "Moisture: " + data[0][0].moisture;
        soilstats.innerHTML = "Soil: " + data[0][0].soil;
        shadestats.innerHTML = "Shade: " + data[0][0].shade;
        imglink.src = data[0][0].link;
    });

}

elmbuttonstats.addEventListener('click', (e) => {
    getStats(1);

})

birchbuttonstats.addEventListener('click', (e) => {
    getStats(2)
})

willowbuttonstats.addEventListener('click', (e) => {
    getStats(3)
})

furbuttonstats.addEventListener('click', (e) => {
    getStats(4)
})

oakbuttonstats.addEventListener('click', (e) => {
    getStats(5)
})

beechbuttonstats.addEventListener('click', (e) => {
    getStats(6)
})

pinebuttonstats.addEventListener('click', (e) => {
    getStats(7)
})

maplebuttonstats.addEventListener('click', (e) => {
    getStats(8)
})



// setTimeout(function(){ setCharts(); }, 1000);

setup()
getStats(1);




//API CALLS


// getGraph(2,1);

















