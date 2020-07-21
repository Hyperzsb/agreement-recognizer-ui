<template>
    <b-container tag="section" fluid class="text-center">
        <b-row class="pb-3">
            <b-col cols="12" class="p-0">
                <b-jumbotron fluid>
                    <template v-slot:header>
                        <h2>Agreement Recognizer</h2>
                    </template>

                    <template v-slot:lead>
                        Some description
                    </template>

                    <hr class="my-4">

                    <p>
                        Some more description
                    </p>

                    <b-button variant="primary" href="#" class="mr-3">
                        Try Now
                    </b-button>
                    <b-button variant="success" href="#" class="ml-3">

                        View in GitHub
                    </b-button>
                </b-jumbotron>
            </b-col>
        </b-row>

        <b-row v-for="(feature, index) in features" :key="index" class="pb-5">
            <b-col offset-sm="1" sm="10" offset-lg="2" lg="8">
                <b-card bg-variant="light" no-body class="overflow-hidden custom-card-body">
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
                        imgSrc: 'https://picsum.photos/400/400/?image=20'
                    },
                    {
                        name: 'Feature Two',
                        description: 'Some Description about feature two',
                        imgSrc: 'https://picsum.photos/400/400/?image=20'
                    },
                    {
                        name: 'Feature Three',
                        description: 'Some Description about feature three',
                        imgSrc: 'https://picsum.photos/400/400/?image=20'
                    }
                ]
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

    .custom-card-body {
        box-shadow: 0 .125rem .25rem rgba(#000, .075);
        transition: 0.5s;

        &:hover {
            box-shadow: 0 1rem 3rem rgba(#000, .175);
        }
    }

</style>
