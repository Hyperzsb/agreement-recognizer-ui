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
                            <b-button-group>
                                <b-dropdown right split text="Learn More" variant="success" @click="learnMore(0)">
                                    <b-dropdown-item @click="learnMore(0)">作品概述</b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item @click="learnMore(1)">设计与实现</b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item @click="learnMore(2)">测试与分析</b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item @click="learnMore(3)">创新性说明</b-dropdown-item>
                                </b-dropdown>
                                <b-button variant="info"
                                          href="https://github.com/IFpop/Protocol_Recognition" target="_blank">
                                    View in GitHub
                                    <b-icon icon="box-arrow-up-right" class="ml-1"></b-icon>
                                </b-button>
                            </b-button-group>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>

        <b-row class="mt-2 mb-3" ref="learn-more">
            <b-col offset-sm="1" sm="10" offset-lg="2" lg="8">
                <b-tabs content-class="mt-4" align="center"
                        active-nav-item-class="font-weight-bold text-uppercase"
                        v-model="tabIndex">
                    <b-tab v-for="(feature, index) in features" :key="index"
                           :title="feature.name">
                        <div class="custom-tab-content" v-html="feature.description">
                        </div>
                    </b-tab>
                </b-tabs>
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
                tabIndex: 0,
                features: [
                    {
                        name: '作品概述',
                        description: ''
                    },
                    {
                        name: '设计与实现',
                        description: ''
                    },
                    {
                        name: '测试与分析',
                        description: ''
                    },
                    {
                        name: '创新性说明',
                        description: ''
                    }
                ],
                descriptionBgSrc: require('@/assets/img/background-1.jpg')
            }
        },
        methods: {
            learnMore(index) {
                window.scrollTo({
                    top: this.$refs['learn-more'].offsetTop - 85,
                    behavior: "smooth"
                })
                this.tabIndex = index;
            },
            ...mapMutations([
                'changeNavItem'
            ])
        },
        created() {
            this.changeNavItem(0);
            const MarkdownIt = require('markdown-it');
            const markdownItClass = require('@toycode/markdown-it-class');
            const mapping = {
                img: 'custom-img',
                table: 'custom-table',
                h1: 'custom-h',
                h2: 'custom-h',
                h3: 'custom-h',
                h4: 'custom-h',
                h5: 'custom-h',
            };
            const markdownIt = MarkdownIt().use(markdownItClass, mapping);
            this.features[0].description = markdownIt.render(require('@/assets/markdown/sketch.md'));
            this.features[1].description = markdownIt.render(require('@/assets/markdown/design&implement.md'));
            this.features[2].description = markdownIt.render(require('@/assets/markdown/test&analysis.md'));
            this.features[3].description = markdownIt.render(require('@/assets/markdown/innovation.md'));
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

    .custom-tab-content {
        height: 74vh;
        padding: 2rem 3rem;
        border: #dee2e6 1px solid;
        border-radius: 5px;
        overflow-y: scroll;
        text-align: left;
        box-shadow: 0 .125rem .25rem rgba(#000, .075);

        @include mobile {
            padding: 1rem 1.5rem;
            height: 67vh;
        }
    }

</style>
