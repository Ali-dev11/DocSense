import {cn} from '@/lib/utils'
import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
	title: 'DocSense',
	description:
		'DocSense allows you to have conversations with any PDF document.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html
			lang='en'
			className='light'>
			<body
				className={cn(
					'min-h-screen font-sans antialiased grainy',
					inter.className
				)}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
