import React from 'react'

function Stats() {
    return ( 
        <div className="Container p-2">
        <div className="row p-5">
            <div className="col-6 p-5">
                <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                <h2 className='fs-4'>Customer-first always</h2>
                <p className='text-muted mb-4'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                 
                <h2 className='fs-4'>No spam or gimmicks</h2>
                <p className='text-muted mb-4'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                
                <h2 className='fs-4'>The Zerodha universe</h2>
                <p className='text-muted mb-4'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>


                <h2 className='fs-4'>Do better with money</h2>
                <p className='text-muted mb-4'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

            </div>
            <div className="col-6 text-center">
                <img src='media/images/ecosystem.png'  alt='ecosystem' style={{ width: "90%"}}/>
                <div>
                    <a href='*' className='mx-5' style={{textDecoration:"none"}}> Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                    <a href='*'  style={{textDecoration:"none"}}> Try kite demo <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="text-center mt-5">
            <img src='media/images/pressLogos.png' alt='preetag' style={{ width:"55%"}} />
            </div>
        </div>
        </div>
     );
}

export default Stats;