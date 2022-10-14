const Home = () => {
    let images = [
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/1732/1351732-v-77bea0bdf9e6"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/7977/1317977-v-2b6393692cd1"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/686/1360686-v-605289936f83"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v"},
        {img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v"}
    ]
    return ( 
        <div className="home">
            <div className="poster">
                <img width="95%" height="40%" src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-09-21/Desk_MasterChefAustraliaNS-9875146c-696e-49fc-82aa-ee739909adf7.jpg" alt="image"  />
            </div>
            <div className="movies_list">
                
                {
                    images.map((data)=>{
                        return(
                            <img width="225px" height="350px" src={data.img} alt="image"/>
                        )
                    })
                }
                  
            </div>
        </div>

    );
}
 
export default Home;
