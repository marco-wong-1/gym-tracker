import Link from 'next/link';
import './globals.css';
import { Nav } from './components/Nav';
import { AuthContextProvider } from '@/context/AuthContext';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<AuthContextProvider>
					<Nav />
					{children}
				</AuthContextProvider>
			</body>
		</html>
	);
}
