import React from 'react'
import Typical from 'react-typical'
const Banner = () => {
    return (
        <div className="hero mt-4" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rTLQYBZRvcwhHupqtmbGwvcQU9gv1RTi-w&usqp=CAU")` }}>
            <div className="hero-overlay bg-opacity-60">
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md py-10">
                        <Typical
                            className="my-5 text-5xl font-bold"
                            steps={['Start selling', 1000]}
                            loop={2}
                            wrapper="p"
                        />
                        <p className="mb-5">T Phone-Reseller Shop makes selling easy with a number of resources and tools to get you started.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;