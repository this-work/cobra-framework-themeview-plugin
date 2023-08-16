/**
 * example-button-secondary
 */

import { common } from '@this/cobra-framework/src/plugins/mixins';

export default {

    name: 'example-button-secondary',

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
