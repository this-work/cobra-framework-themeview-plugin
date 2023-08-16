/**
 * example-search-field
 */

import { common } from '@this/cobra-framework/src/plugins/mixins';

export default {

    name: 'example-search-field',

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
        }
    }
};
