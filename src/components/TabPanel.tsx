import { PropsWithChildren } from 'react';

interface ITabPanel {
    value: string | number;
    index: string | number;
}

const TabPanel: React.FC<PropsWithChildren<ITabPanel>> = ({ children, value, index }) => {
    return (
        <div style={{ display: value === index ? 'block' : 'none' }}>
            {children}
        </div>
    )
}
export default TabPanel
