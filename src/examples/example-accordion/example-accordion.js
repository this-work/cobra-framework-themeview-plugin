/**
 * example-accordion
 */

import { common } from '@this/cobra-framework/src/plugins/mixins';

export default {

    name: 'example-accordion',

    components: {
        'example-component': () => import('../example-component/example-component.vue')
    },

    mixins: [
        ...common
    ],

    data() {
        return {
        };
    },

    computed: {
        blockClasses() {
            return {
            };
        },
        panels() {
            return [
                { header: { text: "<p>Accordion Headline</p>" } }
            ];
        }
    }
};
