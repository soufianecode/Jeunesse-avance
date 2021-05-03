module.exports={
    //Function to display home.ejs
    display:function(req, res) {
        let pageName="Home";
        res.render('../views/home', {pageName:pageName});
   },
}