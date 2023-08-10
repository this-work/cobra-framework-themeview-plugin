<template>
    <main class="themeview">

        <section v-for="(theme, index) in this.$styling.themes" :class="`themeview__section theme-${theme}`">
            <h2 class="themeview__heading">Theme {{ theme }}</h2>

            <div class="themeview__component">

                <h2 class="themeview__component-heading">background</h2>

                <div class="themeview__component-line" >
                    <div class="themeview__component--background"></div>
                </div>

            </div>

            <div class="themeview__component">

                <h2 class="themeview__component-heading">background-deco</h2>

                <div class="themeview__component-line" >
                    <div class="themeview__component--background-deco"></div>
                </div>

            </div>

            <div class="themeview__component" v-if="componentExist('m-interaction')">

                <h2 class="themeview__component-heading">interaction-color</h2>

                <div class="themeview__component-line" >
                    <div class="themeview__component--interaction-color"></div>
                </div>

            </div>

            <div class="themeview__component">

                <h2 class="themeview__component-heading">overline</h2>

                <div class="themeview__component-line" >
                    <p class="themeview__component--overline">overline</p>
                </div>

            </div>

            <div class="themeview__component">

                <h2 class="themeview__component-heading">headline</h2>

                <div class="themeview__component-line" >
                    <p class="themeview__component--headline">headline - h2</p>
                </div>

            </div>

            <div class="themeview__component">

                <h2 class="themeview__component-heading">copytext</h2>

                <div class="themeview__component-line" >
                    <p class="themeview__component--copytext">copytext</p>
                </div>

            </div>

            <div class="themeview__component">

                <h2 class="themeview__component-heading">link</h2>

                <div class="themeview__component-line" >
                    <a href="javascirpt:void(0);" class="themeview__component--link">link</a>
                </div>

            </div>

            <div class="themeview__component">

                <h2 class="themeview__component-heading">selectiontext</h2>

                <div class="themeview__component-line" >
                    <p class="themeview__component--copytext">lorem ipsum dolor sit amet</p>
                </div>

            </div>

            <div class="themeview__component">

                <h2 class="themeview__component-heading">blockqoute</h2>

                <div class="themeview__component-line" >
                    <blockquote class="themeview__component--blockqoute">Lorem ipsum</blockquote>
                </div>

            </div>

            <div class="themeview__component">

                <h2 class="themeview__component-heading">icon</h2>

                <div class="themeview__component-line" >
                    <c-icon name="code" />
                </div>

            </div>

            <div class="themeview__component">

                <h2 class="themeview__component-heading">media-overlay</h2>

                <div class="themeview__component-line" >
                    <c-image
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAQAAACx6dw/AAAADUlEQVR42mP8r8YABAAGxgEnx9DQLwAAAABJRU5ErkJggg=="
                        :overlay="true"
                    />
                </div>

            </div>

            <div class="themeview__component">

                <h2 class="themeview__component-heading">skeleton</h2>

                <div class="themeview__component-line" >
                    <c-image
                        class="themeview__component--skeleton"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAQAAACx6dw/AAAAC0lEQVR42mNkAAMAAA4AAjOwv9wAAAAASUVORK5CYII="
                        :skeleton="true"
                    />
                </div>

            </div>

            <div class="themeview__component">

                <h2 class="themeview__component-heading">button-primary</h2>

                <div class="themeview__component-line" >
                    <c-button label="Button" appearance="primary" />
                </div>
                <div class="themeview__component-line" >
                    <c-button label="Button" disabled appearance="primary" />
                </div>
                <br>
                <div class="themeview__component-line" >
                    <c-button label="Button" icon="arrowForward" appearance="primary" />
                </div>
                <div class="themeview__component-line" >
                    <c-button label="Button" icon="arrowForward" disabled appearance="primary" />
                </div>
                <br>
                <div class="themeview__component-line" >
                    <c-button label="Button" icon="arrowBack" iconPosition="left" appearance="primary" />
                </div>
                <div class="themeview__component-line" >
                    <c-button label="Button" icon="arrowBack" iconPosition="left" disabled appearance="primary" />
                </div>
                <br>
                <div class="themeview__component-line" >
                    <c-button label="Button" size="big" appearance="primary" />
                </div>
                <div class="themeview__component-line" >
                    <c-button label="Button" size="big" disabled appearance="primary" />
                </div>
                <br>
                <div class="themeview__component-line" >
                    <c-button label="Button" size="big" icon="arrowForward" appearance="primary" />
                </div>
                <div class="themeview__component-line" >
                    <c-button label="Button" size="big" icon="arrowForward" disabled appearance="primary" />
                </div>
                <br>
                <div class="themeview__component-line" >
                    <c-button label="Button" size="big"  icon="arrowBack" iconPosition="left" appearance="primary" />
                </div>
                <div class="themeview__component-line" >
                    <c-button label="Button" size="big"  icon="arrowBack" iconPosition="left" disabled appearance="primary" />
                </div>

            </div>

            <div class="themeview__component">

                <h2 class="themeview__component-heading">button-secondary</h2>

                <div class="themeview__component-line" >
                    <c-button label="Button" appearance="secondary" />
                </div>
                <div class="themeview__component-line" >
                    <c-button label="Button" disabled appearance="secondary" />
                </div>
                <br>
                <div class="themeview__component-line" >
                    <c-button label="Button" icon="arrowForward" appearance="secondary" />
                </div>
                <div class="themeview__component-line" >
                    <c-button label="Button" icon="arrowForward" disabled appearance="secondary" />
                </div>
                <br>
                <div class="themeview__component-line" >
                    <c-button label="Button" icon="arrowBack" iconPosition="left" appearance="secondary" />
                </div>
                <div class="themeview__component-line" >
                    <c-button label="Button" icon="arrowBack" iconPosition="left" disabled appearance="secondary" />
                </div>
                <br>
                <div class="themeview__component-line" >
                    <c-button label="Button" size="big" appearance="secondary" />
                </div>
                <div class="themeview__component-line" >
                    <c-button label="Button" size="big" disabled appearance="secondary" />
                </div>
                <br>
                <div class="themeview__component-line" >
                    <c-button label="Button" size="big" icon="arrowForward" appearance="secondary" />
                </div>
                <div class="themeview__component-line" >
                    <c-button label="Button" size="big" icon="arrowForward" disabled appearance="secondary" />
                </div>
                <br>
                <div class="themeview__component-line" >
                    <c-button label="Button" size="big"  icon="arrowBack" iconPosition="left" appearance="secondary" />
                </div>
                <div class="themeview__component-line" >
                    <c-button label="Button" size="big"  icon="arrowBack" iconPosition="left" disabled appearance="secondary" />
                </div>

            </div>

        </section>

    </main>
</template>

<script>

import * as components from '@/.nuxt/components';
const pascalcase = require('pascalcase');

export default {

    name: 'themeview',

    methods: {
        componentExist(name) {
            let componentList = { ...components };
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
        padding: spacing('44');
        text-align: center;
        opacity: .3;
        font-weight: bold;
        @include color-theme('copytext');
    }
    &__component {
        display: block;
        padding: spacing('44');
        border-bottom: 1px solid rgba(180,180,180,.2);

        &--background {
            display: block;
            width: 100%;
            height: unitize(80px);
            border: 1px solid rgba(180,180,180,.2);
        }
        &--background-deco {
            display: block;
            width: 100%;
            height: unitize(80px);
            @include color-theme('background-deco');
        }
        &--interaction-color {
            display: block;
            width: 100%;
            height: unitize(80px);
            background: red;
        }
        &--overline {
            @include responsive-font('overline');
            @include color-theme('overline');
        }
        &--headline {
            @include responsive-font('h2');
            @include color-theme('headline');
        }
        &--copytext {
            @include responsive-font('copytext');
            @include color-theme('copytext');
        }
        &--link {
            display: inline-block;
            @include responsive-font('copytext');
            @include color-theme('link');
        }
        &--blockqoute {
            @include color-theme('blockqoute');
        }
        &--skeleton {
            .c-image__canvas-skeleton--hide::before {
                opacity: 1!important;
            }
        }
    }
    &__component-heading {
        font-size: unitize(12px);
        font-weight: bold;
        margin-bottom: spacing('20');
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        @include color-theme('copytext');
    }
    &__component-line {
        display: block;
        padding: spacing('10') 0;
    }
}
</style>
