/**
 * example-hotspot-item
 */

import { common } from '@this/cobra-framework/src/plugins/mixins';

export default {

    name: 'example-hotspot-item',

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

        image() {
            return {
                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAABAQAAAAFgjAMjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAnRSTlMAAHaTzTgAAAACYktHRAAB3YoTpAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+cIDhcqD/GH2SQAAAAMSURBVAhbY2AgHQAAADQAAdqGFsQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDgtMTRUMjM6NDI6MTUrMDI6MDCzwb2dAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA4LTE0VDIzOjQyOjE1KzAyOjAwwpwFIQAAAABJRU5ErkJggg==",
                aspectRatios: {
                    0: "1920:1"
                }
            };
        },

        hotspots () {
            return [ {
                position: {
                    x: 0.50,
                    y: 0.50
                }
            }];
        }
    }
};
