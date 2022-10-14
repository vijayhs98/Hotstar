const Addfav = () => {

    return (  
        <div className="addfavs">
            <div className="form">
                <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" width="200" alt=""></img>
                <form action="">
                    <input type="text" placeholder="Title"/>
                    <input type="text" placeholder="Genre"/>
                    <input type="text" placeholder="Language"/>
                    <input type="number" min={0} max={10} placeholder="Rating"/>
                    <button>Add</button>
                </form>
            </div>
            <div className="textcontent">
                <h1>Add your favourite movies and Tv shows.</h1>
            </div>
        </div>
    );
}
 
export default Addfav;