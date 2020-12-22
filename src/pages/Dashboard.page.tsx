import RC, { useEffect, useRef, useState } from 'react'
import Chart from "react-apexcharts";
import ApexChart from 'apexcharts'
import { QRSComplexResult } from '../interfaces/QRSComplexResult';



export const DashboardPage: RC.FunctionComponent<any> = (props: any) => {

    const ws = useRef(new WebSocket("ws://localhost:8080/api/ws/7dd77f33-a86e-43dc-9e3d-264a6e119f0e/1"))
    const [rawMeasurements, updateRawMeasurements] = useState([] as number[])
    // const [filteredMeasurements, updateFilteredMeasurements] = useState([] as number[])
    // const [differentiatedMeasurements, updatedifferentiatedMeasurements] = useState([] as number[])

    const chartConfig = {
        options: {
            chart: {
                id: "realtime",
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                        speed: 1000
                    }
                },
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            stroke: {
                curve: 'smooth',
            },
            colors: ["#FF3051"],
            title: {
                text: 'Raw ECG Measurements',
                align: 'center'
            },
            markers: {
                size: 0
            },
            xaxis: {
                type: "numeric",
                range: 10
            },
            yaxis: {
                max: 3.5
            },

        },
        series: [
            {
                // data: Array(10).fill(0).map(x => Math.floor(Math.random() * 100))
                data: [0]
            },
        ]
    }


    // const chartConfig2 = {
    //     options: {
    //         chart: {
    //             id: "realtime2",
    //             animations: {
    //                 enabled: true,
    //                 easing: 'linear',
    //                 dynamicAnimation: {
    //                     speed: 1000
    //                 }
    //             },
    //             toolbar: {
    //                 show: false
    //             },
    //             zoom: {
    //                 enabled: false
    //             }
    //         },
    //         stroke: {
    //             curve: 'smooth'
    //         },
    //         title: {
    //             text: 'Filtered ECG Measurements',
    //             align: 'center'
    //         },
    //         markers: {
    //             size: 0
    //         },
    //         xaxis: {
    //             type: "numeric",
    //             range: 10
    //         },
    //         yaxis: {
    //             max: 3.5
    //         },

    //     },
    //     series: [
    //         {
    //             // data: Array(10).fill(0).map(x => Math.floor(Math.random() * 100))
    //             data: [0]
    //         },
    //     ]
    // }



    // const chartConfig3 = {
    //     options: {
    //         chart: {
    //             id: "realtime3",
    //             animations: {
    //                 enabled: true,
    //                 easing: 'linear',
    //                 dynamicAnimation: {
    //                     speed: 1000
    //                 }
    //             },
    //             toolbar: {
    //                 show: false
    //             },
    //             zoom: {
    //                 enabled: false
    //             }
    //         },
    //         stroke: {
    //             curve: 'smooth'
    //         },
    //         title: {
    //             text: 'Differentiated ECG Measurements',
    //             align: 'center'
    //         },
    //         markers: {
    //             size: 0
    //         },
    //         xaxis: {
    //             type: "numeric",
    //             range: 10
    //         },
    //         yaxis: {
    //             max: 3.5
    //         },

    //     },
    //     series: [
    //         {
    //             data: [0]
    //         },
    //     ]
    // }


    useEffect(() => {
        console.log(ws.current);
        ws.current.onopen = () => console.log("OPEN");
        ws.current.onclose = () => console.log("CLOSED");

        return () => {
            ws.current.close()
        }

    }, [])

    // useEffect(() => {
    //     const interval = window.setInterval(() => {
    //         // ApexChart.exec("realtime", "updateSeries", [{ data: Array(10).fill(0).map(x => Math.floor(Math.random() * 100)) }])
    //         const dataX = Number((Math.random() * 10).toFixed(4))
    //         updateRawMeasurements([...rawMeasurements, dataX])
    //         ApexChart.exec("realtime", "updateSeries", [{ data: rawMeasurements }])
    //         console.log("Real-time updating...", dataX);
    //         console.log(rawMeasurements);

    //     }, 2000)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [updateRawMeasurements, rawMeasurements])

    useEffect(() => {
        if (!ws.current) return;
        ws.current.onmessage = message => {
            const qrsComplexResult = JSON.parse(message.data) as unknown as QRSComplexResult
            updateRawMeasurements([...rawMeasurements, Number(qrsComplexResult.measurement.toFixed(4))])
            // updateFilteredMeasurements([...filteredMeasurements, Number(qrsComplexResult.filtered_ecg.toFixed(4))])
            // updateFilteredMeasurements([...differentiatedMeasurements, Number(qrsComplexResult.differentiated_ecg.toFixed(4))])


            ApexChart.exec("realtime", "updateSeries", [{ data: rawMeasurements }])
            // ApexChart.exec("realtime2", "updateSeries", [{ data: filteredMeasurements }])
            // ApexChart.exec("realtime3", "updateSeries", [{ data: differentiatedMeasurements }])
            // console.log(rawMeasurements);
        }
    }, [updateRawMeasurements, rawMeasurements])




    return <div style={{ height: 500 }}>
        <Chart
            options={chartConfig.options}
            series={chartConfig.series}
            type="line"
            width="1500"
        />

        {/* <Chart
            options={chartConfig2.options}
            series={chartConfig2.series}
            type="line"
            width="600"
        />

        <Chart
            options={chartConfig3.options}
            series={chartConfig3.series}
            type="line"
            width="600"
        /> */}

    </div>
}