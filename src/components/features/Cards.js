import React from 'react'

export default function Cards() {
    const Data = [
        {
            imgPath: "/asset/Rectangle 17898.png",
            button: "Available"
        },
        {
            imgPath: "/asset/Rectangle 17898 (5).png",
            button: "Under Contract"
        },
        {
            imgPath: "/asset/Rectangle 17898 (1).png",
            button: "Available"
        },
        {
            imgPath: "/asset/Rectangle 17898 (1).png",
            button: "Available"
        },
        {
            imgPath: "/asset/Rectangle 17898 (2).png",
            button: "Under Contract"
        },
        {
            imgPath: "/asset/Rectangle 17898.png",
            button: "Available"
        },
        {
            imgPath: "/asset/Rectangle 17898 (3).png",
            button: "Available"
        },
        {
            imgPath: "/asset/Rectangle 17898 (4).png",
            button: "Under Contract"
        },
        {
            imgPath: "/asset/Rectangle 17898.png",
            button: "Available"
        }
    ]
    return (
        <div className='container-fluid py-5'>
            <div className='row w-90 mx-auto'>
                {Data.map((item, index) => {
                    return (
                        <div className='col-lg-4 col-md-6 col-12 mx-auto text-center  text-white mb-4' key={index}>
                            <div className='property-card p-10'>
                                <div className='position-relative text-center d-flex justify-content-center align-items-end '>

                                    <img alt='' src={item.imgPath} className='img-fluid w-100' />
                                    <div className='text-center position-absolute fs-18 fw-semibold d-inline-block property-card mb-3 px-3 py-2 rounded-pill'>
                                        {item.button}
                                    </div>
                                </div>
                                <div className='mt-4 d-flex justify-content-between px-2'>

                                    <div>
                                        <p className='fs-24 fw-bold mb-0'>
                                            $530,000
                                        </p>
                                        <p className='fs-14 mb-0 fw-light'>
                                            Asking Price
                                        </p>

                                    </div>
                                    <div>
                                        <p className='fs-24 fw-bold mb-0'>
                                            $5,000
                                        </p>
                                        <p className='fs-14 mb-0 fw-light'>
                                            Proposed Rent
                                        </p>

                                    </div>
                                    <div>
                                        <p className='fs-24 fw-bold mb-0'>
                                            11.25%
                                        </p>
                                        <p className='fs-14 mb-0 fw-light'>
                                            Gross Cap Rate
                                        </p>

                                    </div>
                                </div>
                                <div className='mt-3 d-flex justify-content-between px-2'>

                                    <div>
                                        <div className='d-flex align-items-center justify-content-center'>

                                            <p className='fs-24 fw-bold mb-0'>
                                                4
                                            </p>
                                            <span className='ms-2'>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                                    <path d="M14.1805 6.08934V1.64059C14.1805 0.735969 13.4445 0 12.5399 0H3.46003C2.55541 0 1.8195 0.735969 1.8195 1.64059V6.08934C0.777125 6.34009 0 7.27969 0 8.39791V11.7161C0 11.9794 0.213406 12.1928 0.476656 12.1928H1.81947V13.3456C1.81947 13.6089 2.03288 13.8223 2.29612 13.8223C2.55937 13.8223 2.77278 13.6089 2.77278 13.3456V12.1928H13.2272V13.3456C13.2272 13.6089 13.4406 13.8223 13.7038 13.8223C13.9671 13.8223 14.1805 13.6089 14.1805 13.3456V12.1928H15.5233C15.7865 12.1928 15.9999 11.9794 15.9999 11.7161V8.39791C16 7.27969 15.2229 6.34009 14.1805 6.08934ZM2.77281 1.64059C2.77281 1.26166 3.08113 0.953344 3.46003 0.953344H12.5399C12.9189 0.953344 13.2272 1.26166 13.2272 1.64059V6.02316H11.652V5.27116C11.652 4.02522 10.6384 3.01159 9.39247 3.01159H6.60759C5.36166 3.01159 4.34803 4.02525 4.34803 5.27116V6.02312H2.77281V1.64059ZM10.6987 5.27116V6.02312H5.30128V5.27116C5.30128 4.55088 5.88725 3.96491 6.60753 3.96491H9.39244C10.1127 3.96487 10.6987 4.55091 10.6987 5.27116ZM0.953313 11.2395V8.39791C0.953313 7.61413 1.59097 6.97647 2.37475 6.97647H13.6252C14.409 6.97647 15.0466 7.61413 15.0466 8.39791V11.2395H0.953313Z" fill="#00AAE8" />
                                                </svg>
                                            </span>
                                        </div>
                                        <p className='fs-14 mb-0 fw-light'>
                                            Bedrooms
                                        </p>

                                    </div>
                                    <div>
                                        <div className='d-flex align-items-center justify-content-center'>

                                            <p className='fs-24 fw-bold mb-0'>
                                                2.5
                                            </p>
                                            <span className='ms-2'>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <g clipPath="url(#clip0_1779_3417)">
                                                        <path d="M16 7.125C16 6.73078 15.8392 6.35947 15.5471 6.0795C15.2624 5.80659 14.8905 5.65625 14.5 5.65625H2.96875V3.05687C2.96875 2.5915 3.133 2.15594 3.43116 1.83053C3.71894 1.51662 4.09853 1.34375 4.5 1.34375C5.23531 1.34375 5.78959 1.76266 5.96909 2.40625H5.75C5.49113 2.40625 5.28125 2.61613 5.28125 2.875C5.28125 3.13387 5.49113 3.34375 5.75 3.34375H7.25C7.50887 3.34375 7.71875 3.13387 7.71875 2.875C7.71875 2.61613 7.50887 2.40625 7.25 2.40625H6.928C6.83856 1.894 6.60231 1.43581 6.23981 1.08588C5.78581 0.647625 5.16794 0.40625 4.5 0.40625C3.83262 0.40625 3.20762 0.687062 2.74003 1.19712C2.28297 1.69597 2.03125 2.35644 2.03125 3.05687V5.65625H1.5C1.1095 5.65625 0.737625 5.80659 0.452875 6.0795C0.160812 6.35947 0 6.73078 0 7.125C0 7.51922 0.160812 7.89053 0.452875 8.1705C0.620188 8.33084 0.817688 8.4485 1.03125 8.51859V11.2831C1.03125 12.638 1.85678 13.8037 3.03125 14.3038V15.125C3.03125 15.3839 3.24113 15.5938 3.5 15.5938C3.75887 15.5938 3.96875 15.3839 3.96875 15.125V14.5463C4.08175 14.5582 4.19641 14.5643 4.3125 14.5643H11.6875C11.8036 14.5643 11.9183 14.5582 12.0312 14.5463V15.125C12.0312 15.3839 12.2411 15.5938 12.5 15.5938C12.7589 15.5938 12.9688 15.3839 12.9688 15.125V14.3038C14.1432 13.8037 14.9688 12.638 14.9688 11.2831V8.51859C15.1823 8.4485 15.3798 8.33087 15.5471 8.1705C15.8392 7.89053 16 7.51922 16 7.125ZM14.0312 11.2831C14.0312 12.5754 12.9798 13.6268 11.6875 13.6268H4.3125C3.02016 13.6268 1.96875 12.5754 1.96875 11.2831V8.59375H14.0312V11.2831ZM14.5 7.65625H1.5C1.20034 7.65625 0.9375 7.408 0.9375 7.125C0.9375 6.842 1.20034 6.59375 1.5 6.59375H14.5C14.7997 6.59375 15.0625 6.842 15.0625 7.125C15.0625 7.408 14.7997 7.65625 14.5 7.65625Z" fill="#00AAE8" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1779_3417">
                                                            <rect width="16" height="16" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                        </div>
                                        <p className='fs-14 mb-0 fw-light'>
                                            Baths
                                        </p>

                                    </div>
                                    <div>
                                        <div className='d-flex align-items-center justify-content-center'>

                                            <p className='fs-24 fw-bold mb-0'>
                                                2350
                                            </p>
                                            <span className='ms-2'>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <g clipPath="url(#clip0_1779_3393)">
                                                        <path d="M3.01419 6.94028V6.69296L2.84229 6.87078L2.64956 7.07016C2.54283 7.17658 2.39826 7.23635 2.24752 7.23635C2.09651 7.23635 1.95168 7.17636 1.8449 7.06957C1.73811 6.96279 1.67813 6.81796 1.67813 6.66695C1.67813 6.51594 1.73811 6.37111 1.8449 6.26433L7.17823 0.930996L7.17852 0.930705C7.2312 0.877592 7.29387 0.835436 7.36292 0.806667C7.43198 0.777898 7.50604 0.763086 7.58085 0.763086C7.65566 0.763086 7.72972 0.777898 7.79878 0.806666C7.86783 0.835435 7.93051 0.877592 7.98318 0.930705L7.98347 0.930995L13.3168 6.26433C13.4236 6.37111 13.4836 6.51594 13.4836 6.66695C13.4836 6.81796 13.4236 6.96279 13.3168 7.06957C13.21 7.17636 13.0652 7.23635 12.9142 7.23635C12.7634 7.23635 12.6189 7.17657 12.5121 7.07016C12.5119 7.06996 12.5118 7.06977 12.5116 7.06957L12.3194 6.87078L12.1475 6.69296V6.94028V12.0003C12.1475 12.1506 12.0878 12.2947 11.9815 12.401C11.8753 12.5072 11.7311 12.567 11.5809 12.567H3.58085C3.43056 12.567 3.28643 12.5072 3.18016 12.401C3.07389 12.2947 3.01419 12.1506 3.01419 12.0003V6.94028ZM7.65156 2.20291L7.58085 2.1322L7.51014 2.20291L4.17681 5.53624L4.14752 5.56553V5.60695V11.3336V11.4336H4.24752H10.9142H11.0142V11.3336V5.60695V5.56553L10.9849 5.53624L7.65156 2.20291Z" fill="#00AAE8" stroke="#1F262E" strokeWidth="0.2" />
                                                        <path d="M12.2448 13.4337H12.3448V13.3337C12.3448 13.1834 12.4045 13.0392 12.5108 12.933C12.617 12.8267 12.7612 12.767 12.9115 12.767C13.0617 12.767 13.2059 12.8267 13.3122 12.933C13.4184 13.0392 13.4781 13.1834 13.4781 13.3337V14.667C13.4781 14.8173 13.4184 14.9614 13.3122 15.0677C13.2059 15.174 13.0617 15.2337 12.9115 15.2337C12.7612 15.2337 12.617 15.174 12.5108 15.0677C12.4045 14.9614 12.3448 14.8173 12.3448 14.667V14.567H12.2448H2.91146H2.81146V14.667C2.81146 14.8173 2.75176 14.9614 2.64549 15.0677C2.53922 15.174 2.39508 15.2337 2.24479 15.2337C2.0945 15.2337 1.95037 15.174 1.8441 15.0677C1.73783 14.9614 1.67813 14.8173 1.67813 14.667V13.3337C1.67813 13.1834 1.73783 13.0392 1.8441 12.933C1.95037 12.8267 2.0945 12.767 2.24479 12.767C2.39508 12.767 2.53922 12.8267 2.64549 12.933C2.75176 13.0392 2.81146 13.1834 2.81146 13.3337V13.4337H2.91146H12.2448Z" fill="#00AAE8" stroke="#1F262E" strokeWidth="0.2" />
                                                        <path d="M15.482 11.4337V11.3337V2.00033V1.90033H15.582C15.7323 1.90033 15.8765 1.84062 15.9827 1.73435C16.089 1.62808 16.1487 1.48395 16.1487 1.33366C16.1487 1.18337 16.089 1.03924 15.9827 0.932965C15.8765 0.826694 15.7323 0.766992 15.582 0.766992H14.2487C14.0984 0.766992 13.9543 0.826694 13.848 0.932965C13.7417 1.03924 13.682 1.18337 13.682 1.33366C13.682 1.48395 13.7417 1.62808 13.848 1.73435C13.9543 1.84062 14.0984 1.90033 14.2487 1.90033H14.3487V2.00033V11.3337V11.4337H14.2487C14.0984 11.4337 13.9543 11.4934 13.848 11.5996C13.7417 11.7059 13.682 11.85 13.682 12.0003C13.682 12.1506 13.7417 12.2947 13.848 12.401M15.482 11.4337L13.848 12.401M15.482 11.4337H15.582M15.482 11.4337H15.582M13.848 12.401C13.9543 12.5073 14.0984 12.567 14.2487 12.567H15.582C15.7323 12.567 15.8765 12.5073 15.9827 12.401C16.089 12.2947 16.1487 12.1506 16.1487 12.0003C16.1487 11.85 16.089 11.7059 15.9827 11.5996C15.8765 11.4934 15.7323 11.4337 15.582 11.4337M13.848 12.401L15.582 11.4337" fill="#00AAE8" stroke="#1F262E" strokeWidth="0.2" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1779_3393">
                                                            <rect width="16" height="16" fill="white" transform="translate(0.914062)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                        </div>
                                        <p className='fs-14 mb-0 fw-light'>
                                            Sq. Ft.
                                        </p>

                                    </div>
                                    <div>
                                        <div className='d-flex align-items-center justify-content-center'>

                                            <p className='fs-24 fw-bold mb-0'>
                                                2018
                                            </p>
                                            <span className='ms-2'>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M5.33594 1.3335V3.3335" stroke="#00AAE8" strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M10.6641 1.3335V3.3335" stroke="#00AAE8" strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M2.33594 6.06006H13.6693" stroke="#00AAE8" strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M14 5.66659V11.3333C14 13.3333 13 14.6666 10.6667 14.6666H5.33333C3 14.6666 2 13.3333 2 11.3333V5.66659C2 3.66659 3 2.33325 5.33333 2.33325H10.6667C13 2.33325 14 3.66659 14 5.66659Z" stroke="#00AAE8" strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M10.4625 9.13314H10.4685" stroke="#00AAE8" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M10.4625 11.1331H10.4685" stroke="#00AAE8" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M7.99764 9.13314H8.00363" stroke="#00AAE8" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M7.99764 11.1331H8.00363" stroke="#00AAE8" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M5.52889 9.13314H5.53488" stroke="#00AAE8" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M5.52889 11.1331H5.53488" stroke="#00AAE8" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                        <p className='fs-14 mb-0 fw-light'>
                                            Built
                                        </p>

                                    </div>
                                </div>

                                <div className='d-flex mt-3 px-2  align-items-center justify-content-center'>
                                    <span>

                                        <svg className=' me-2' xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                                            <g clipPath="url(#clip0_1779_3387)">
                                                <path d="M6.74063 15.6C8.34375 13.5938 12 8.73125 12 6C12 2.6875 9.3125 0 6 0C2.6875 0 0 2.6875 0 6C0 8.73125 3.65625 13.5938 5.25938 15.6C5.64375 16.0781 6.35625 16.0781 6.74063 15.6ZM6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z" fill="#00AAE8" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1779_3387">
                                                    <rect width="12" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    <p className='fs-14 mb-0'>
                                        4124 NE Skyview drive Portland, OR 97119
                                    </p>
                                </div>
                                <hr />
                                <p className='light-green mb-1 px-4 d-inline-block  fw-bolder py-2 mb-0 rounded pointer'>
                                    Property Details
                                </p>

                            </div>
                        </div>
                    )
                })}

            </div>
            <div className='row w-90 mx-auto justify-content-center mt-3'>
                <span className='pagination rounded-circle mx-1 mb-0 border pe-0 d-flex justify-content-center  align-items-center flex-shrink-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M11.8125 3.375L6.1875 9L11.8125 14.625" stroke="#1F262E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
                <p className='pagination rounded-circle mx-1 mb-0 border pe-0 d-flex justify-content-center  align-items-center flex-shrink-0'>
                    1
                </p>
                <p className='pagination rounded-circle mx-1 mb-0 border pe-0 d-flex justify-content-center  align-items-center flex-shrink-0'>
                    2
                </p>
                <p className='pagination rounded-circle mx-1 mb-0 border pe-0 d-flex justify-content-center  align-items-center flex-shrink-0'>
                    ...
                </p>
                <span className='pagination rounded-circle mx-1 mb-0 border pe-0 d-flex justify-content-center  align-items-center flex-shrink-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M6.1875 3.375L11.8125 9L6.1875 14.625" stroke="#1F262E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>

            </div>
        </div>
    )
}
