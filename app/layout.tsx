import './globals.css';
import { Nav } from './components/Nav';
import { AuthContextProvider } from '@/context/AuthContext';
import { WorkoutContextProvider } from '@/context/WorkoutContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='w-full h-full'>
      <body>
        <AuthContextProvider>
          <WorkoutContextProvider>
            <Nav />
            {children}
          </WorkoutContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
