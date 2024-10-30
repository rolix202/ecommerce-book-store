import React, { useState, useEffect } from 'react';

const ScreenWarning = ({ children }) => {
    const [isWarningVisible, setIsWarningVisible] = useState(false);
    const minWidth = 1024; 

    const checkScreenSize = () => {
        if (window.innerWidth < minWidth) {
            setIsWarningVisible(true); 
        } else {
            setIsWarningVisible(false); 
        }
    };

    useEffect(() => {
       
        checkScreenSize();

        
        window.addEventListener('resize', checkScreenSize);

       
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            {isWarningVisible && (
                <div style={{
                    backgroundColor: '#f8d7da',
                    color: '#721c24',
                    padding: '15px',
                    margin: '20px',
                    border: '1px solid #f5c6cb',
                    borderRadius: '5px',
                    textAlign: 'center',
                    zIndex: 1000 
                }}>
                    The team is still working on responsiveness. The current production is only available in desktop mode.
                </div>
            )}
            
            <div style={{
                display: isWarningVisible ? 'none' : 'block'
            }}>
                {children}
            </div>
        </div>
    );
};

export default ScreenWarning;
