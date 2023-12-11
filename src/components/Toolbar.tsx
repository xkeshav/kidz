import { FC, useContext } from 'hono/jsx';
import { ThemeContext } from '../hooks/ThemeContext';



const Button: FC = () => {
  const theme = useContext(ThemeContext);
  return <button style={theme}>Push!</button>
};

export const Toolbar: FC = () => {
  return (
    <div>
      <Button />
    </div>
  )
}