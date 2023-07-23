import React from 'react'

export default function Header1() {

    return (
        <div className='container-fluid pt-5'>
            <div className='row w-90 mx-auto'>
                {/* <div className='w-80 mx-auto px-0'> */}
                <div className='col-md-10 col-12 mx-auto text-center'>
                    {/* <img alt='' src='/asset/unsubscribe 1.svg' className='img-fluid' /> */}
                    <h2 className='text-center fs-40 mb-3'>
                        Featured Properties
                    </h2>
                    <div className='border w-270 rounded mx-auto mb-3 gray-text d-flex align-items-center justify-content-center'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M14.5006 14.5006L10.6028 10.6028M10.6028 10.6028C11.6578 9.5479 12.2504 8.11711 12.2504 6.62521C12.2504 5.13331 11.6578 3.70252 10.6028 2.64759C9.5479 1.59265 8.11711 1 6.62521 1C5.13331 1 3.70252 1.59265 2.64759 2.64759C1.59265 3.70252 1 5.13331 1 6.62521C1 8.11711 1.59265 9.5479 2.64759 10.6028C3.70252 11.6578 5.13331 12.2504 6.62521 12.2504C8.11711 12.2504 9.5479 11.6578 10.6028 10.6028V10.6028Z" stroke="#7F7F7F" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input className='search-by-state ms-2 fs-18' placeholder='Search by State' />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13 5.5L8 10.5L3 5.5" stroke="#1F262E" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p className='text-center  mb-0 fs-14 formgray-text'>
                        We currently have 14 properties.
                    </p>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}
