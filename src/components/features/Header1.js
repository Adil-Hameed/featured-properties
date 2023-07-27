import React from 'react'

export default function Header1() {
    const states = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
        'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
        'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
        'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
        'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
        'Wisconsin', 'Wyoming'
    ];

    return (
        <div className='container-fluid  px-0 bg-header-1'>
            <div className='row w-100 mx-auto py-5'>
                {/* <div className='w-80 mx-auto px-0'> */}
                <div className='col-md-10 col-12 mx-auto text-center'>
                    {/* <img alt='' src='/asset/unsubscribe 1.svg' className='img-fluid' /> */}
                    <h1 className='text-center text-white mb-3 montserrat'>
                        Featured Properties
                    </h1>
                    <div className='border w-270 rounded mx-auto mb-1 bg-white gray-text d-flex align-items-center justify-content-start px-3'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
                            <path d="M7.5 13L0.138784 0.250001L14.8612 0.250002L7.5 13Z" fill="#40FF62" />
                        </svg>
                        <select className='ms-2 fs-18 flex-grow-1 border-0 option-clr pointer'>
                            <option className='pointer'>
                                Select State
                            </option>
                            {states.map((state, index) => (
                                <option className='pointer' key={index} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                        {/* <input className='search-by-state ms-2 fs-18 flex-grow-1' placeholder='Search by State' /> */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13 5.5L8 10.5L3 5.5" stroke="#1F262E" strokeLinecap="round" strokeLinejoin="round" />
                        </svg> */}
                    </div>
                    <p className='text-center  mb-0 text-white'>
                        There are currently 14 properties.
                    </p>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}
