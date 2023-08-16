/**
 * example-table
 */

import { common } from '@this/cobra-framework/src/plugins/mixins';

export default {

    name: 'example-table',

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
        items() {
            return [
                { description: 'Lorem ipsum dolor', type: 'pdf', size: '1.23 MB', url: 'javascript: void(0)' },
                { description: 'Quisque quis nunc laoreet', type: 'pdf', size: '4.56 MB', url: 'javascript: void(0)' }
            ];
        }
    }
};
