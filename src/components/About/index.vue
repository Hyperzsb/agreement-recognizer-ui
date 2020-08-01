<template>
    <b-container tag="section" fluid>
        <b-row class="pt-5 pl-3 pr-3 pt-md-5 pl-md-5 pr-md-5">
            <b-col cols="12" md="8" offset-md="2" class="pl-4">
                <h2 class="headline">AgainT</h2>
                <h6 class="sub-headline">
                    Developer team
                </h6>
            </b-col>
        </b-row>
        <b-row class="pt-5 pl-3 pr-3 pb-5 p-md-5">
            <b-col v-for="(teammate, index) in teammates" :key="index"
                   cols="12" md="4" :offset-md="index % 2 === 0 ? 2 : 0" class="pb-5">
                <b-card no-body class="custom-card">
                    <b-card-body>
                        <b-img thumbnail fluid rounded="circle"
                               width="200rem" height="200rem"
                               class="mb-4 mt-2"
                               :src="teammate.imgSrc"></b-img>
                        <b-card-title>{{ teammate.name }}</b-card-title>
                        <b-card-sub-title class="mb-2">{{ teammate.title }}</b-card-sub-title>
                        <b-card-text>
                            {{ teammate.info }}
                        </b-card-text>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import {mapMutations} from "vuex";

export default {
    name: "index",
    data() {
        return {
            teammates: [{
                imgSrc: require('@/assets/img/image1.jpg'),
                name: 'Person One',
                title: 'Job one',
                info: 'Som Information'
            }, {
                imgSrc: require('@/assets/img/image2.jpg'),
                name: 'Person Two',
                title: 'Job Two',
                info: 'Som Information'
            }, {
                imgSrc: require('@/assets/img/image3.jpg'),
                name: 'Person Three',
                title: 'Job Three',
                info: 'Som Information'
            }, {
                imgSrc: require('@/assets/img/image4.jpg'),
                name: 'Person Four',
                title: 'Job Four',
                info: 'Som Information'
            }]
        }
    },
    methods: {
        ...mapMutations([
            'changeNavItem'
        ])
    },
    created() {
        this.changeNavItem(2);
    }
}

</script>

<style lang="scss" scoped>

.headline {
    display: inline-block;
    text-decoration-line: underline;
    text-shadow: 0.5rem 0.5rem 0.3rem rgba(#000000, 0.3);
}

.sub-headline {
    display: inline-block;
    margin-left: 30px;
    margin-right: 30px;
    color: #adb5bd;
}

.custom-card {
    text-align: center;
    box-shadow: 0 .125rem .25rem rgba(#000, .075);
    transition: 0.5s;

    &:hover {
        box-shadow: 0 1rem 3rem rgba(#000, .175);
    }
}

</style>
