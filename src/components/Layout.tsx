import { memo, type FC } from 'hono/jsx';
import { ThemeContext, themes } from '../hooks/ThemeContext';
import { Toolbar } from './Toolbar';

const Header = memo(() => <header>Welcome to Hono <Toolbar/></header>)
const Footer = memo(() => <footer>Powered by Hono</footer>)

export const Layout: FC = ({children}) => {
  return (
    <html>
      <body>
			<ThemeContext.Provider value={themes.dark}>
				<Header/>
				{children!}
				<Footer/>
			</ThemeContext.Provider>
			</body>
    </html>
  )
};