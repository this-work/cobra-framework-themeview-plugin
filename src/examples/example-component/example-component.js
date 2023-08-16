/**
 * example-component
 */

import { common } from '@this/cobra-framework/src/plugins/mixins';

export default {

    name: 'example-component',

    mixins: [
        ...common
    ],

    props: {
        title: String
    },

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
