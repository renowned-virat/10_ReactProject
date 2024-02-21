const HeroSection=()=>{
    return (
        
        <main className="hero container" display="flex" >
            <div className="hero-content" display="flex">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP 
                    YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST 
                    AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-btn">
                    <button gap="4px">Shop Now</button>
                    <button className="sec-but" >Category</button>
                </div>
               
            
            
            
            <div className="Shopping">
                <p>Also Available On</p>
                <div className="brand-icon">
                    <img src="/amazon.png" alt="amazon-logo"/>
                    <img src="/flipkart.png" alt="flipkart-logo"/>
                </div>
            </div>
            </div>

            <div className="hero-image">
                <img src="/shoe_image.png"/>
            </div>
        </main>
    )
}
export default HeroSection;