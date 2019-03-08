
        window.onload = function() {
            var Aziz = [

               
			{ y: 42, label: "first1" },
			{ y: 21, label: "first2"},
			{ y: 24.5, label: "first3" },
			{ y: 9, label: "first4" },
			{ y: 3.1, label: "first5" }

			// data value in  bar  chart

            ]; 




            var chart = new CanvasJS.Chart("chartContainer", {
                title: {
                    text: "task"
                },
                data: [{
                    type: "pie",
                    dataPoints: Aziz
                }]


            });




            function AzizDataPoint()

             {
                xValue = Number(document.getElementById("xValue").value);
                yValue = Number(document.getElementById("yValue").value);

                // value  add  

                Aziz.push({
                    x: xValue,
                    y: yValue
                });


                chart.render();
            }

            var barButton = document.getElementById("barButton");

            barButton.addEventListener("click", AzizDataPoint);
        }
