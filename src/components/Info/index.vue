<template>
    <b-container tag="section" fluid class="text-center pb-5">
        <b-row class="pb-5">
            <b-col cols="12" class="p-0">
                <div class="custom-jumbotron">
                    <div class="description-background">
                        <img :src="descriptionBgSrc" alt="Main Image">
                    </div>
                    <div class="description-title">
                        <h1>Agreement Recognizer</h1>
                    </div>
                    <div class="description-content">
                        <div class="main-description">
                            <h3>Some description</h3>
                        </div>
                        <div class="sub-description">
                            <h5>Some more description Some more description Some more description</h5>
                        </div>
                        <div class="description-nav">
                            <button class="custom-button draw-center">Learn More</button>
                            <button class="custom-button draw-center">View in GitHub</button>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>

        <b-row v-for="(feature, index) in features" :key="index" class="pb-5">
            <b-col offset-sm="1" sm="10" offset-lg="2" lg="8">
                <b-card bg-variant="light" no-body class="overflow-hidden custom-card">
                    <b-row align-v="center" no-gutters>
                        <b-col cols="12" sm="4" :order-md="index % 2 === 0 ? 1 : 2" order="1">
                            <b-card-img-lazy :src="feature.imgSrc" :alt="feature.name"></b-card-img-lazy>
                        </b-col>
                        <b-col cols="12" sm="8" :order-md="index % 2 === 0 ? 2 : 1" order="2">
                            <b-card-body :title="feature.name">
                                <b-card-text>
                                    {{ feature.description }}
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

    import {mapMutations} from 'vuex'

    export default {
        name: 'index',
        data() {
            return {
                features: [
                    {
                        name: 'Feature One',
                        description: 'Some Description about feature one',
                        imgSrc: require('@/assets/img/image1.jpg')
                    },
                    {
                        name: 'Feature Two',
                        description: 'Some Description about feature two',
                        imgSrc: require('@/assets/img/image2.jpg')
                    },
                    {
                        name: 'Feature Three',
                        description: 'Some Description about feature three',
                        imgSrc: require('@/assets/img/image3.jpg')
                    },
                    {
                        name: 'Feature Four',
                        description: 'Some Description about feature Four',
                        imgSrc: require('@/assets/img/image4.jpg')
                    }
                ],
                descriptionBgSrc: require('@/assets/img/background-1.jpg')
            }
        },
        methods: {
            ...mapMutations([
                'changeNavItem'
            ])
        },
        created() {
            this.changeNavItem(0);
        }
    }

</script>

<style lang="scss" scoped>

    // Set Mobile breakpoint
    @mixin mobile {
        @media screen and (max-width: 992px) {
            @content;
        }
    }

    .custom-jumbotron {
        width: 100%;
        height: 92vh;
    }

    .description-background {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #f8f9fa;
        z-index: -1;
        overflow-x: hidden;

        img {
            width: 100%;
            height: 100%;

            @include mobile {
                position: absolute;
                right: calc((100% - 1000px) / 2);
                height: 100%;
                width: auto;
            }
        }
    }

    .description-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 10%;
        left: 5%;
        width: 40%;
        height: 20%;
        border-radius: 5px;
        color: #212529;
        cursor: default;

        h1 {
            font-weight: bolder;
            font-size: 3rem;
        }

        @include mobile {
            top: 5%;
            left: 5%;
            width: 90%;
            height: 20%;
        }
    }

    .description-content {
        position: absolute;
        top: 10%;
        left: 65%;
        width: 30%;
        height: 80%;
        padding: 1rem 2rem;
        border-radius: 5px;
        background: rgba(255, 255, 255, .3);
        box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, .3);
        overflow: hidden;
        cursor: default;

        @include mobile {
            top: 30%;
            left: 5%;
            width: 90%;
            height: 65%;
        }
    }

    .description-content::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        filter: blur(5px);
        background-color: rgba(255, 255, 255, 0.8);
        z-index: -1;
    }

    .description-content .main-description {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 30%;

        @include mobile {
            height: 25%;
        }
    }

    .description-content .sub-description {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 45%;
    }

    .description-content .description-nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 25%;
        padding-top: 1rem;
        border-top: #dee2e6 2px solid;

        @include mobile {
            height: 30%;
        }
    }

    .custom-button {
        background: none;
        border: 0;
        box-sizing: border-box;
        margin: 1rem;
        padding: 1rem;
        box-shadow: inset 0 0 0 2px #17a2b8;
        color: #17a2b8;
        font-weight: bold;
        position: relative;
        vertical-align: middle;

        @include mobile {
            padding: 0.5rem;
        }
    }

    .custom-button::before, .custom-button::after {
        box-sizing: inherit;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .draw-center::before, .draw-center::after {
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transform-origin: center;
    }

    .draw-center::before {
        border-top: 2px solid #28a745;
        border-bottom: 2px solid #28a745;
        transform: scale3d(0, 1, 1);
    }

    .draw-center::after {
        border-left: 2px solid #28a745;
        border-right: 2px solid #28a745;
        transform: scale3d(1, 0, 1);
    }

    .draw-center:hover {
        color: #28a745;
    }

    .draw-center:hover::before, .draw-center:hover::after {
        transform: scale3d(1, 1, 1);
        transition: transform 0.5s;
    }

    .custom-card {
        box-shadow: 0 .125rem .25rem rgba(#000, .075);
        transition: 0.5s;

        &:hover {
            box-shadow: 0 1rem 3rem rgba(#000, .175);
        }
    }

</style>
