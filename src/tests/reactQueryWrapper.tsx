import { QueryClient, QueryClientProvider } from 'react-query';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient();
const wrapper: React.FC<PropsWithChildren> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default wrapper;
