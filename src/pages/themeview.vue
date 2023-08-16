<template>
    <main class="themeview">

        <section v-for="(theme, index) in this.$styling.themes" :class="`themeview__section theme-${theme}`">
            <h2 class="themeview__heading">Theme {{ theme }}</h2>

            <example-background />
            <example-background-deco />
            <example-interaction-color v-if="componentExist('m-interaction')" />
            <example-overline />
            <example-headline />
            <example-copytext />
            <example-link />
            <example-selectiontext />
            <example-blockquote />
            <example-icon />
            <example-media-overlay />
            <example-skeleton />
            <example-button-primary />
            <example-button-secondary />
            <example-button-pill-dark />
            <example-button-icon />
            <example-button-text />
            <example-input />
            <example-checkbox />
            <example-radiobutton />
            <example-range-knob />
            <example-range />
            <example-table />
            <example-search-button v-if="componentExist('f-search')" />
            <example-search-field-background v-if="componentExist('f-search')" />
            <example-search-field v-if="componentExist('f-search')" />
            <example-tag-pill v-if="componentExist('f-search')" />
            <example-slider-bullet />
            <example-slider-controls-fraction />
            <example-tab-title />
            <example-tab-thumbnail />
            <example-tooltip />
            <example-accordion />
            <example-timebox v-if="componentExist('c-timebox')" />
            <example-modal />
            <example-feedback-icon v-if="componentExist('c-feedback')" />
            <example-hotspot-item />
        </section>

    </main>
</template>

<script>

import * as components from '@/.nuxt/components';
const pascalcase = require('pascalcase');

export default {

    name: 'themeview',

    components: {
        'example-background':                 () => import('../examples/example-background/example-background.vue'),
        'example-background-deco':            () => import('../examples/example-background-deco/example-background-deco.vue'),
        'example-interaction-color':          () => import('../examples/example-interaction-color/example-interaction-color.vue'),
        'example-overline':                   () => import('../examples/example-overline/example-overline.vue'),
        'example-headline':                   () => import('../examples/example-headline/example-headline.vue'),
        'example-copytext':                   () => import('../examples/example-copytext/example-copytext.vue'),
        'example-link':                       () => import('../examples/example-link/example-link.vue'),
        'example-selectiontext':              () => import('../examples/example-selectiontext/example-selectiontext.vue'),
        'example-blockquote':                 () => import('../examples/example-blockquote/example-blockquote.vue'),
        'example-icon':                       () => import('../examples/example-icon/example-icon.vue'),
        'example-media-overlay':              () => import('../examples/example-media-overlay/example-media-overlay.vue'),
        'example-skeleton':                   () => import('../examples/example-skeleton/example-skeleton.vue'),
        'example-button-primary':             () => import('../examples/example-button-primary/example-button-primary.vue'),
        'example-button-secondary':           () => import('../examples/example-button-secondary/example-button-secondary.vue'),
        'example-button-pill-dark':           () => import('../examples/example-button-pill-dark/example-button-pill-dark.vue'),
        'example-button-icon':                () => import('../examples/example-button-icon/example-button-icon.vue'),
        'example-button-text':                () => import('../examples/example-button-text/example-button-text.vue'),
        'example-input':                      () => import('../examples/example-input/example-input.vue'),
        'example-checkbox':                   () => import('../examples/example-checkbox/example-checkbox.vue'),
        'example-radiobutton':                () => import('../examples/example-radiobutton/example-radiobutton.vue'),
        'example-range-knob':                 () => import('../examples/example-range-knob/example-range-knob.vue'),
        'example-range':                      () => import('../examples/example-range/example-range.vue'),
        'example-table':                      () => import('../examples/example-table/example-table.vue'),
        'example-search-button':              () => import('../examples/example-search-button/example-search-button.vue'),
        'example-search-field-background':    () => import('../examples/example-search-field-background/example-search-field-background.vue'),
        'example-search-field':               () => import('../examples/example-search-field/example-search-field.vue'),
        'example-tag-pill':                   () => import('../examples/example-tag-pill/example-tag-pill.vue'),
        'example-slider-bullet':              () => import('../examples/example-slider-bullet/example-slider-bullet.vue'),
        'example-slider-controls-fraction':   () => import('../examples/example-slider-controls-fraction/example-slider-controls-fraction.vue'),
        'example-tab-title':                  () => import('../examples/example-tab-title/example-tab-title.vue'),
        'example-tab-thumbnail':              () => import('../examples/example-tab-thumbnail/example-tab-thumbnail.vue'),
        'example-tooltip':                    () => import('../examples/example-tooltip/example-tooltip.vue'),
        'example-accordion':                  () => import('../examples/example-accordion/example-accordion.vue'),
        'example-timebox':                    () => import('../examples/example-timebox/example-timebox.vue'),
        'example-modal':                      () => import('../examples/example-modal/example-modal.vue'),
        'example-feedback-icon':              () => import('../examples/example-feedback-icon/example-feedback-icon.vue'),
        'example-hotspot-item':               () => import('../examples/example-hotspot-item/example-hotspot-item.vue')
    },

    methods: {
        componentExist(name) {
            const componentList = { ...components };
            return componentList.hasOwnProperty(pascalcase(name))
        }
    }

}
</script>

<style lang="scss">
.themeview {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    &__section {
        display: block;
        width: 33.3332%;
        min-width: unitize(450px);
        @include color-theme('background');
    }
    &__heading {
        display: block;
        padding: unitize(44px);
        text-align: center;
        opacity: .3;
        font-weight: bold;
        @include color-theme('copytext');
    }
}
</style>
