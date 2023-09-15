import '@styles/global.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "Promptopia",
    description: "Discover and Share AI Prompts"
}

const Rootlayout = ({children}) => {
    return (
        <html lang='eng'>
            <body>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                {/* Main Content */}
                <main className='app'>
                    <Nav/>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default Rootlayout;