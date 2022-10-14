const Navbar = () => {
    let navbar_links = [
        {links:"Home", path:"/"},
        {links:"About", path:"/about"},
        {links:"Favourites", path:"/favourites"},
        {links:"AddFav", path:"/addfav"},
        {links:"SignUp"}
    ]
    return ( 
        <div className="navbar">
        <div className="logo">
            <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" width="200" alt=""></img>
        </div>
        <div className="links">
            {navbar_links.map((li)=>{
                return(
                    <a href={li.path}>{li.links}</a>
                )
            })}
        </div>
    </div>
     );
}
 
export default Navbar;