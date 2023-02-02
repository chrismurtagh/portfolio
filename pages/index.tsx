import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Chris Murtagh - Portfolio</title>
				<meta
					name="description"
					content="The personal protfolio of Chris Murtagh"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="p-10 text-red-500">Hello World</h1>
		</>
	)
}
