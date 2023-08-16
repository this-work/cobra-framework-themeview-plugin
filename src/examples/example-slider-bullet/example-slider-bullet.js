/**
 * example-slider-bullet
 */

import { common } from '@this/cobra-framework/src/plugins/mixins';

export default {

    name: 'example-slider-bullet',

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

        options() {
            return {
                pagination: {
                    type: 'bullets'
                }
            };
        },

        slides() {
            return [
                {
                    content: [{
                        name: "c-text",
                        data: {
                            props: {
                                text: "<p>Slide 1</p>"
                            }
                        }
                    }]
                },
                {
                    content: [{
                        name: "c-text",
                        data: {
                            props: {
                                text: "<p>Slide 2</p>"
                            }
                        }
                    }]
                },
                {
                    content: [{
                        name: "c-text",
                        data: {
                            props: {
                                text: "<p>Slide 3</p>"
                            }
                        }
                    }]
                },
                {
                    content: [{
                        name: "c-text",
                        data: {
                            props: {
                                text: "<p>Slide 4</p>"
                            }
                        }
                    }]
                },
                {
                    content: [{
                        name: "c-text",
                        data: {
                            props: {
                                text: "<p>Slide 5</p>"
                            }
                        }
                    }]
                },
                {
                    content: [{
                        name: "c-text",
                        data: {
                            props: {
                                text: "<p>Slide 6</p>"
                            }
                        }
                    }]
                }
            ];
        }
    }
};
