<template>
    <b-container tag="section" fluid>
        <b-row class="p-3 p-md-5 mb-0 mb-md-4">
            <b-col cols="12" offset-md="1" md="6" class="mr-0 mr-md-3">
                <b-row class="pt-4 pt-md-3  pb-4 pb-md-0">
                    <b-col cols="12">
                        <b-form-group
                                label="Train Dataset: "
                                label-for="train-dataset-select"
                                description="Select a train dataset to show its details.">
                            <b-form-select v-model="selectedTrainDataset" :options="trainDatasets"
                                           id="train-dataset-select">
                                <template v-slot:first>
                                    <b-form-select-option :value="null" disabled>-- Please select a train dataset --
                                    </b-form-select-option>
                                </template>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row class="pt-3 pb-0 pb-md-3">
                    <b-col cols="12" md="6">
                        <b-card no-body bg-variant="light">
                            <template v-slot:header>
                                <h6 class="mb-0">Train Dataset Details</h6>
                            </template>
                            <b-card-body class="pb-0">
                                <p>Size: <b>{{ trainDatasetSize }}</b></p>
                                <p>Total Records: <b>{{ trainDatasetTotalRecords }}</b></p>
                            </b-card-body>
                            <b-card-body class="custom-card-body">
                                <canvas id="pie-chart"></canvas>
                            </b-card-body>
                        </b-card>
                    </b-col>
                    <b-col cols="12" md="6" class="pt-5 pt-md-0 pb-3 pb-md-0">
                        <b-card no-body bg-variant="light">
                            <template v-slot:header>
                                <h6 class="mb-0">Training Result</h6>
                            </template>
                            <b-card-body class="pb-0">
                                <p>Train Echos: <b>{{ trainEchos }}</b></p>
                                <p>Train Accuracy: <b>{{ trainAccuracy }}</b></p>
                            </b-card-body>
                            <b-card-body class="custom-card-body">
                                <canvas id="line-chart"></canvas>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="12" md="4" class="ml-0 ml-md-3">
                <b-row class="pt-4 pt-md-3  pb-4 pb-md-0">
                    <b-col cols="12">
                        <b-row align-v="center">
                            <b-col cols="12" md="8">
                                <b-form-group
                                        label="Test Dataset: "
                                        label-for="test-dataset-select"
                                        description="Select a test dataset to evaluate the model.">
                                    <b-form-select v-model="selectedTestDataset" :options="testDatasets"
                                                   id="test-dataset-select">
                                        <template v-slot:first>
                                            <b-form-select-option :value="null" disabled>
                                                -- Please select a test dataset --
                                            </b-form-select-option>
                                        </template>
                                    </b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col cols="12" md="4" class="pb-2">
                                <b-button variant="success" block id="go-test-button">Test Now</b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row class="pt-3 pb-3">
                    <b-col cols="12" class="pt-0 pb-5 pb-md-0">
                        <b-card no-body bg-variant="light">
                            <template v-slot:header>
                                <h6 class="mb-0">Testing Result</h6>
                            </template>
                            <b-card-body class="pb-0">
                                <p>Test Accuracy: <b>{{ testAccuracy }}</b></p>
                                <p>Test Rand Index: <b>{{ testRandIndex }}</b></p>
                            </b-card-body>
                            <b-card-body class="custom-card-body">
                                <canvas id="bar-chart"></canvas>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import Chart from 'chart.js'

    import {mapMutations} from 'vuex'

    export default {
        name: "index",
        data() {
            return {
                selectedTrainDataset: null,
                selectedTestDataset: null,
                trainDatasetSize: '10.8Mb',
                trainDatasetTotalRecords: 85,
                trainDatasets: [
                    {value: '0', text: 'Train Dataset One'},
                    {value: '1', text: 'Train Dataset Two'},
                    {value: '2', text: 'Train Dataset Three'},
                    {value: '3', text: 'Train Dataset Four'}
                ],
                testDatasets: [
                    {value: '0', text: 'Test Dataset One'},
                    {value: '1', text: 'Test Dataset Two'},
                    {value: '2', text: 'Test Dataset Three'},
                    {value: '3', text: 'Test Dataset Four'}
                ],
                trainEchos: 10,
                trainAccuracy: 97.7,
                testAccuracy: 95.2,
                testRandIndex: 0.765,
                pieDemoData: {
                    datasets: [{
                        data: [10, 20, 30, 25],
                        backgroundColor: ['rgb(246, 191, 188, 0.2)', 'rgb(0, 110, 84, 0.2)',
                            'rgb(102, 153, 204, 0.2)', 'rgb(196, 163, 191, 0.2)'],
                        borderColor: ['rgb(246, 191, 188, 1)', 'rgb(0, 110, 84, 1)',
                            'rgb(102, 153, 204, 1)', 'rgb(196, 163, 191, 1)'],
                        hoverBackgroundColor: ['rgb(246, 191, 188, 0.4)', 'rgb(0, 110, 84, 0.4)',
                            'rgb(102, 153, 204, 0.4)', 'rgb(196, 163, 191, 0.4)']
                    }],
                    labels: [
                        'TCP',
                        'HTTP',
                        'SMAP',
                        'SSH'
                    ]
                },
                pieDemoOptions: {
                    maintainAspectRatio: false,
                    title: {
                        display: false,
                        text: 'Doughnut Chart'
                    }
                },
                lineDemoData: {
                    labels: ['Echo 1', 'Echo 2', 'Echo 3', 'Echo 4', 'Echo 5',
                        'Echo 6', 'Echo 7', 'Echo 8', 'Echo 9', 'Echo 10'],
                    datasets: [{
                        label: 'Accuracy',
                        data: [80.2, 83.1, 85.7, 90.4, 93.6, 95.8, 97.5, 97.7, 98.1, 99.1],
                        borderColor: 'rgb(0, 110, 84, 1)',
                        borderWidth: 2,
                        hoverBorderWidth: 5,
                        backgroundColor: 'rgb(0, 110, 84, 0.1)',
                        lineTension: 0.7
                    }, {
                        label: 'Loss',
                        data: [45.2, 51.4, 38.7, 47.4, 56.6, 39.8, 42.3, 47.7, 44.1, 42.6],
                        borderColor: 'rgb(102, 153, 204, 1)',
                        borderWidth: 2,
                        hoverBorderWidth: 5,
                        backgroundColor: 'rgb(102, 153, 204, 0.1)',
                        lineTension: 0.7
                    }]
                },
                lineDemoOptions: {
                    maintainAspectRatio: false,
                    title: {
                        display: false,
                        text: 'Line Chart'
                    },
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Percentage (%)'
                            },
                            ticks: {
                                min: 0,
                                max: 100,
                                stepSize: 10
                            }
                        }]
                    }
                },
                barDemoData: {
                    labels: ["TCP", "HTTP", "SSL", "SMAP", "SSH", "DNS", "FTP"],
                    datasets: [{
                        label: "Dataset #1",
                        backgroundColor: "rgba(204, 153, 204, 0.2)",
                        borderColor: "rgba(204, 153, 204, 1)",
                        borderWidth: 2,
                        hoverBackgroundColor: "rgba(204, 153, 204, 0.4)",
                        data: [650, 590, 200, 810, 560, 550, 400],
                    }]
                },
                barDemoOptions: {
                    maintainAspectRatio: false,
                    title: {
                        display: false,
                        text: 'Bar Chart'
                    },
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Records Num'
                            },
                            ticks: {
                                min: 0,
                                stepSize: 100
                            },
                            stacked: true,
                            gridLines: {
                                display: true,
                                color: "rgba(255,99,132,0.2)"
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }]
                    }
                }
            }
        },
        methods: {
            ...mapMutations([
                'changeNavItem'
            ])
        },
        created() {
            this.changeNavItem(1);
        },
        mounted() {
            Chart.Doughnut('pie-chart', {
                data: this.pieDemoData,
                options: this.pieDemoOptions
            })
            Chart.Line('line-chart', {
                data: this.lineDemoData,
                options: this.lineDemoOptions
            })
            Chart.Bar('bar-chart', {
                data: this.barDemoData,
                options: this.barDemoOptions
            });
        }
    }
</script>

<style lang="scss" scoped>

    .custom-card-body {
        position: relative;
        height: 50vh;
    }

</style>
