<template>
    <b-container tag="footer" fluid class="text-center bg-gray-200 border-top-3">
        <b-row class="pt-3 pb-1">
            <b-col cols="12" class="p-3">
                <b-row class="mt-3 mb-3">
                    <b-col offset-sm="3" offset="2" cols="4">
                        <div class="pb-1 pt-1 text-left font-weight-bolder font-size-101">
                            相关链接
                        </div>
                        <div class="pt-1 pl-3 text-left">
                            <b-link href="#" class="custom-link">链接1</b-link>
                        </div>
                        <div class="pt-1 pl-3 text-left">
                            <b-link href="#" class="custom-link">链接2</b-link>
                        </div>
                        <div class="pt-1 pl-3 text-left">
                            <b-link href="#" class="custom-link">链接3</b-link>
                        </div>
                    </b-col>
                    <b-col cols="4" sm="3">
                        <div class="pb-1 pt-1 text-left font-weight-bolder font-size-101">
                            联系我们
                        </div>
                        <div class="pt-1 pl-3 text-left">
                            <b-link href="#" class="custom-link">链接1</b-link>
                        </div>
                        <div class="pt-1 pl-3 text-left">
                            <b-link href="#" class="custom-link">链接2</b-link>
                        </div>
                        <div class="pt-1 pl-3 text-left">
                            <b-link href="#" class="custom-link">链接3</b-link>
                        </div>
                    </b-col>
                </b-row>
                <b-row class="pt-3">
                    <b-col cols="10" offset="1" sm="8" offset-sm="2" class="border-top-1">
                        <div class="pt-3 font-size-09 text-secondary">
                            Page designed and built with&nbsp;
                            <b-link href="https://cn.vuejs.org/" class="custom-link">
                                Vue.js
                            </b-link>
                            &nbsp;and
                            <br/>
                            Currently v{{version}}. Code licensed&nbsp;
                            <b-link href="https://www.mit-license.org/" class="custom-link">
                                MIT
                            </b-link>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "FooterBar",
        computed: {
            version: () => {
                return require("../../package.json").version;
            }
        }
    }
</script>

<style lang="scss" scoped>

    // Import custom SASS variable overrides, or alternatively
    // define your variable overrides here instead
    @import '../assets/custom';
    // Import Bootstrap and BootstrapVue source SCSS files
    @import '../../node_modules/bootstrap/scss/bootstrap';
    @import '../../node_modules/bootstrap-vue/src/index';

    .border-top-3 {
        border-top: $gray-300 3px solid;
    }

    .border-top-1 {
        border-top: $gray-400 1px solid;
    }

    .bg-gray-200 {
        background-color: $gray-200;
    }

    .font-size-101 {
        font-size: 1.1rem;
    }

    .font-size-09 {
        font-size: 0.9em;
    }

    .custom-link {
        @extend .font-weight-bold;
        @extend .font-size-09;

        color: $dark;

        &:hover {
            color: $primary;
        }

        &:active {
            color: $primary;
        }
    }

</style>
