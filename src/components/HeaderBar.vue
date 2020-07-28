<template>
    <b-navbar tag="header" class="shadow" toggleable="lg" type="dark" variant="info" :sticky="true">
        <b-navbar-brand href="/" :active="true" tag="h1" class="mb-1">
            <b>Agreement Recognizer</b>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/overview" replace
                            :class="{ active: this.navItem === 0 }">
                    <b class="pb-1 pt-3 pt-lg-1 mr-3 custom-button"
                       :class="{ 'custom-button-active' : this.navItem === 0 ,
                                 'custom-button-inactive' : this.navItem !== 0 }">Overview</b>
                </b-nav-item>
                <b-nav-item to="/demo" replace
                            :class="{ active: this.navItem === 1 }">
                    <b class="pb-1 pt-3 pt-lg-1 mr-3 custom-button"
                       :class="{ 'custom-button-active' : this.navItem === 1 ,
                                 'custom-button-inactive' : this.navItem !== 1 }">Demo</b>
                </b-nav-item>
                <b-nav-item to="/about" replace
                            :class="{ active: this.navItem === 2 }">
                    <b class="pb-1 pt-3 pt-lg-1 mr-3 custom-button"
                       :class="{ 'custom-button-active' : this.navItem === 2 ,
                                 'custom-button-inactive' : this.navItem !== 2 }">About</b>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>

    import {mapState} from 'vuex'

    export default {
        name: "HeaderBar",
        computed: {
            ...mapState([
                'navItem'
            ])
        }
    }

</script>

<style lang="scss" scoped>

    .custom-button {
        display: inline-block;
        background: none;
        border: 0;
        box-sizing: border-box;
        position: relative;
        vertical-align: middle;
    }

    .custom-button::after {
        box-sizing: inherit;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .custom-button-active {
        transition: color 0.25s;
    }

    .custom-button-active::after {
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border-bottom: 2px solid #f8f9fa;
    }

    .custom-button-inactive {
        transition: color 0.25s;
    }

    .custom-button-inactive::after {
        bottom: 0;
        left: 0;
        width: 0;
        height: 0;
        border-bottom: 2px solid transparent;
        transition: border-color 0.25s ease-out 0.1s, width 0.25s ease-out 0.1s;
    }

    .custom-button-inactive:hover {
        color: #dee2e6;
    }

    .custom-button-inactive:hover::after {
        width: 100%;
        height: 100%;
    }

    .custom-button-inactive:hover::after {
        border-bottom-color: #dee2e6;
        transition: border-color 0.25s ease-out 0.1s, width 0.25s ease-out 0.1s;
    }

</style>
