<template>
    <b-navbar tag="header" class="shadow" toggleable="lg" type="dark" variant="info" :sticky="true">
        <b-navbar-brand href="/" :active="true" tag="h1" class="mb-1">
            <b>Agreement Recognizer</b>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/info" replace
                            :class="{ active: this.navItem === 0 }">
                    <b class="d-inline-block pb-1 pt-3 pt-lg-1 mr-3"
                       :class="{ 'border-bottom-2': this.navItem === 0 }">概览</b>
                </b-nav-item>
                <b-nav-item to="/demo" replace
                            :class="{ active: this.navItem === 1 }">
                    <b class="d-inline-block pb-1 pt-1 mr-3"
                       :class="{ 'border-bottom-2': this.navItem === 1 }">演示</b>
                </b-nav-item>
                <b-nav-item to="/about" replace
                            :class="{ active: this.navItem === 2 }">
                    <b class="d-inline-block pb-1 pt-1 mb-1 mb-lg-0 mr-3"
                       :class="{ 'border-bottom-2': this.navItem === 2 }">关于</b>
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

    .border-bottom-2 {
        border-bottom: #FFFFFF 2px solid;
    }

</style>
