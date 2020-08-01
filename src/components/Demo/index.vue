<template>
    <b-container tag="section" fluid class="pt-4 pb-4 pt-md-2 pb-md-2">
        <b-row class="p-3 p-md-5">
            <b-col cols="12" md="8">
                <b-row class="pt-3 pb-0 pb-md-3">
                    <b-col cols="12" md="6" class="mb-4 mb-md-0">
                        <b-card no-body bg-variant="light">
                            <template v-slot:header>
                                <h6 class="mb-0">训练中准确率变化</h6>
                            </template>
                            <b-card-body class="custom-card-body">
                                <canvas id="accuracy-chart"></canvas>
                            </b-card-body>
                        </b-card>
                    </b-col>
                    <b-col cols="12" md="6" class="mt-4 mb-2 mt-md-0 mb-md-0">
                        <b-card no-body bg-variant="light">
                            <template v-slot:header>
                                <h6 class="mb-0">训练中损失率变化</h6>
                            </template>
                            <b-card-body class="custom-card-body">
                                <canvas id="loss-chart"></canvas>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="12" md="4" class="mb-1 mb-md-0">
                <b-row class="pt-3 pb-3">
                    <b-col cols="12" class="mt-4 mt-md-0">
                        <b-card no-body bg-variant="light">
                            <template v-slot:header>
                                <h6 class="mb-0">测试结果</h6>
                            </template>
                            <b-card-body class="custom-card-body">
                                <canvas id="test-chart"></canvas>
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
            trainAccuracyData: {
                labels: ['Iter 1', 'Iter 15', 'Iter 30', 'Iter 45', 'Iter 60',
                    'Iter 75', 'Iter 90', 'Iter 105', 'Iter 120', 'Iter 135',
                    'Iter 150', 'Iter 165', 'Iter 180', 'Iter 195', 'Iter 200'],
                datasets: [{
                    label: 'Echo 1',
                    data: [8.6, 53.1, 70.3, 72.7, 87.5,
                        89.1, 89.1, 89.8, 89.8, 90.6,
                        96.1, 90.6, 95.3, 96.9, 98.4],
                    borderColor: 'rgb(0, 110, 84, 1)',
                    borderWidth: 2,
                    hoverBorderWidth: 5,
                    backgroundColor: 'rgb(0, 110, 84, 0.1)',
                    lineTension: 0.7
                }, {
                    label: 'Echo 2',
                    data: [96.9, 95.3, 93.8, 96.1, 93.8,
                        95.3, 96.9, 94.5, 95.3, 97.7,
                        97.7, 96.9, 96.9, 94.5, 99.2],
                    borderColor: 'rgb(102, 153, 204, 1)',
                    borderWidth: 2,
                    hoverBorderWidth: 5,
                    backgroundColor: 'rgb(102, 153, 204, 0.1)',
                    lineTension: 0.7
                }, {
                    label: 'Echo 3',
                    data: [95.3, 97.7, 96.9, 98.4, 96.1,
                        95.3, 97.7, 96.9, 98.4, 96.1,
                        95.3, 97.7, 96.9, 98.4, 96.1],
                    borderColor: 'rgb(246, 191, 188, 1)',
                    borderWidth: 2,
                    hoverBorderWidth: 5,
                    backgroundColor: 'rgb(246, 191, 188, 0.1)',
                    lineTension: 0.7
                }]
            },
            trainAccuracyOptions: {
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: '各轮训练各次迭代准确率'
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
            trainLossData: {
                labels: ['Iter 1', 'Iter 15', 'Iter 30', 'Iter 45', 'Iter 60',
                    'Iter 75', 'Iter 90', 'Iter 105', 'Iter 120', 'Iter 135',
                    'Iter 150', 'Iter 165', 'Iter 180', 'Iter 195', 'Iter 200'],
                datasets: [{
                    label: 'Echo 1',
                    data: [239.2, 144.8, 79.7, 82.7, 42.0,
                        31.6, 30.1, 23.0, 19.6, 17.8,
                        9.6, 20.0, 11.2, 10.9, 6.4],
                    borderColor: 'rgb(0, 110, 84, 1)',
                    borderWidth: 2,
                    hoverBorderWidth: 5,
                    backgroundColor: 'rgb(0, 110, 84, 0.1)',
                    lineTension: 0.7
                }, {
                    label: 'Echo 2',
                    data: [8.4, 9.5, 13.7, 11.2, 10.8,
                        9.4, 12.0, 10.9, 12.7, 6.1,
                        5.7, 11.1, 10.5, 14.6, 6.3],
                    borderColor: 'rgb(102, 153, 204, 1)',
                    borderWidth: 2,
                    hoverBorderWidth: 5,
                    backgroundColor: 'rgb(102, 153, 204, 0.1)',
                    lineTension: 0.7
                }, {
                    label: 'Echo 3',
                    data: [9.7, 10.9, 8.4, 7.2, 12.4,
                        4.4, 9.5, 5.5, 5.2, 6.3,
                        7.1, 7.3, 8.0, 6.5, 3.6],
                    borderColor: 'rgb(246, 191, 188, 1)',
                    borderWidth: 2,
                    hoverBorderWidth: 5,
                    backgroundColor: 'rgb(246, 191, 188, 0.1)',
                    lineTension: 0.7
                }]
            },
            trainLossOptions: {
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: '各轮训练各次迭代损失率'
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Percentage (%)'
                        },
                        ticks: {
                            min: 0
                        }
                    }]
                }
            },
            testData: {
                labels: ['TCP', 'UDP', 'DNS', 'SMB', 'MDNS', 'SSH', 'VNC', 'STUN', 'HTTP', 'NBNS'],
                datasets: [{
                    label: '准确率',
                    data: [88.29, 100.0, 98.57, 100.0, 100.0, 97.86, 97.57, 99.71, 88.57, 99.86],
                    backgroundColor: "rgba(204, 153, 204, 0.2)",
                    borderColor: "rgba(204, 153, 204, 1)",
                    borderWidth: 2,
                    hoverBackgroundColor: "rgba(204, 153, 204, 0.4)"
                }]
            },
            testOptions: {
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: '各协议识别准确率'
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
        Chart.Line('accuracy-chart', {
            data: this.trainAccuracyData,
            options: this.trainAccuracyOptions
        });
        Chart.Line('loss-chart', {
            data: this.trainLossData,
            options: this.trainLossOptions
        });
        Chart.Bar('test-chart', {
            data: this.testData,
            options: this.testOptions
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
