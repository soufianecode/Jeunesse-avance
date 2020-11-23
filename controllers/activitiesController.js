module.exports={
    //Function to display activities.ejs
    display:function(req, res) {
        let pageName="Activities";
        res.render('../views/activities', {pageName:pageName});
   },
}