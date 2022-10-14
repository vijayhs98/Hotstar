const Footer = () => {
    let footer_links=[
        {link:"Terms and Privacy Notice"},
        {link:"Send us feedback"},
        {link:"Help"}]

    return (
        <div className="footer">
            <div className="logo">
                <img width="200" src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png" alt="" />
            </div>
            <div className="footer_links">
                {footer_links.map((data)=>{
                    return(
                    <a href="">{data.link}</a>
                    )
                })}
            </div>
            <div className="footer_desc">
                <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
      );
}
 
export default Footer;