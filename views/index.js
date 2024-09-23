import renderLayout from './components/layout.js'
import { Product } from './components/cards.js'
export const renderHomePage = () => renderLayout(
        /*html*/`

            <div class="bg-white">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                ${ Array(10).fill(Product()).join('')  }
                </div>
            </div>
            </div>

        `
)