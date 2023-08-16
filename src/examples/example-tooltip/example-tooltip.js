/**
 * example-tooltip
 */

import { common } from '@this/cobra-framework/src/plugins/mixins';

export default {

    name: 'example-tooltip',

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

    mounted() {
        setTimeout(() => {
            if (this.$refs.tooltip) {
                this.$refs.tooltip.visible = true;
            }
        }, 200);
    },

    computed: {
        blockClasses() {
            return {
            };
        }
    }
};
