/** @type {import('next').NextConfig} */

const nextConfig = {
    sassOptions: {
        prependData: `
                    @use "sass:math";
                    @import "@/_scss/variable.scss";
                    @import "@/_scss/mixin.scss";
                    @import "@/_scss/layout.scss";
                `
    }
};

export default nextConfig;
