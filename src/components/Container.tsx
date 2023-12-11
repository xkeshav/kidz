import { FC } from 'hono/jsx';
import { Layout } from './Layout';

export type ContainerProps = { message: string };

export const Container: FC<ContainerProps> = ({message}) => {
  return (
    <Layout>
      <h1>Hello !</h1>
      <main>
				This is the {message}
			</main>
    </Layout>
  )
};
