/**
 * example-tab-title
 */

import { common } from '@this/cobra-framework/src/plugins/mixins';

export default {

    name: 'example-tab-title',

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
        tabs() {
            return [
                { "title": "Tabcontent 1" },
                { "title": "Tabcontent 2" }
            ]
        }
    }
};
