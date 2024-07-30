import { resolve } from 'path'

export default {
    base: '/js/',
    build: {
        rollupOptions: {
          input: {
            // @ts-ignore
            main: resolve(__dirname, 'index.html'),
            // @ts-ignore
            page2: resolve(__dirname, 'dop.html'),
       }
     }
   }
 }

