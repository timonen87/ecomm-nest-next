import { Catalog } from '@/components/ui/catalog/Catalog'

import { PUBLIC_URL } from '@/config/url.config'

import { IProduct } from '@/shared/types/product.interface'

import { Hero } from './hero/Hero'

interface HomeProps {
	products: IProduct[]
}

export function Home({ products }: HomeProps) {
	return (
		<>
			<Hero />
			<Catalog
				title='Хиты продаж'
				description='Самые популярные товары нашего магазина.'
				linkTitle='Узнать больше'
				link={PUBLIC_URL.explorer()}
				products={products}
			/>
		</>
	)
}
