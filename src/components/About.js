import React from 'react';

export default function About({ mode }) {
    // Define styles based on the mode
    const myStyle = {
        color: mode === 'dark' ? '#FEEFE5' : '#333333',
        backgroundColor: mode === 'dark' ? '#333333' : '#FEEFE5',
        fontFamily: 'Arial, sans-serif', 
        borderRadius: '8px',
        padding: '20px', 
        boxShadow: mode === 'dark' ? '0 4px 10px rgba(0, 0, 0, 0.5)' : '0 4px 10px rgba(0, 0, 0, 0.1)' // Subtle shadow for depth
    };

    const accordionItemStyle = {
        backgroundColor: mode === 'dark' ? '#444444' : '#FFFFFF', 
        border: mode === 'dark' ? '1px solid #555555' : '1px solid #DDDDDD',
        borderRadius: '8px',
        marginBottom: '10px' 
    };

    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={accordionItemStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button 
                            className="accordion-button" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseOne" 
                            aria-expanded="true" 
                            aria-controls="collapseOne"
                            style={{ backgroundColor: mode === 'dark' ? '#555555' : '#F1F1F1', color: mode === 'dark' ? '#FEEFE5' : '#333333' }}
                        >
                            <strong>Boost and Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Welcome to BoostText, the ultimate tool for enhancing and analyzing your text effortlessly.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={accordionItemStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button 
                            className="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseTwo" 
                            aria-expanded="false" 
                            aria-controls="collapseTwo"
                            style={{ backgroundColor: mode === 'dark' ? '#555555' : '#F1F1F1', color: mode === 'dark' ? '#FEEFE5' : '#333333' }}
                        >
                            <strong>Free and User-Friendly</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            BoostText is completely free to use, providing a seamless and user-friendly experience for all your text transformation needs.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={accordionItemStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button 
                            className="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseThree" 
                            aria-expanded="false" 
                            aria-controls="collapseThree"
                            style={{ backgroundColor: mode === 'dark' ? '#555555' : '#F1F1F1', color: mode === 'dark' ? '#FEEFE5' : '#333333' }}
                        >
                            <strong>Browser Compatibility</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Our tool is designed to be compatible with all modern browsers, ensuring a smooth and efficient text processing experience across different platforms.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
