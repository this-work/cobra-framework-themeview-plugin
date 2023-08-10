/**
 * Cobra-Framework themeview plugin with nuxt 2.13+ integration
 *
 * Version 1.0.0
 * Author Tobias Wöstmann
 *
 */

export default function() {

    const { nuxt } = this;

    /**
     * Make sure the nuxt is in dev mode
     */
    if (nuxt.options.dev) {

        /**
         * Add custom theme view page
         */
        this.nuxt.hook('build:extendRoutes', (routes, resolve) => {
            routes.push(
                {
                    name: 'themeview',
                    path: '/themeview',
                    component: resolve(__dirname, '../src/pages/themeview.vue'),
                }
            )
        });

    }
}
