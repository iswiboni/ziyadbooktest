import type { Metadata } from 'next'
import ProductDetailPage from '@/components/ProductDetail/DetailPage'
import { api } from '@/utils/api'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params

  try {
    const { data } = await api.get('ecommerce/auth/products/all/category')
    const product = data?.data?.data?.find((item: any) => item.id.toString() === id)

    return {
      title: product?.name ?? 'Detail Produk',
      description: product?.description ?? 'Lihat detail produk kami.',
    }
  } catch {
    return {
      title: 'Detail Produk',
      description: 'Lihat detail produk kami.',
    }
  }
}

export default async function Page({ params }: Props) {
  const { id } = await params
  return <ProductDetailPage id={id} />
}