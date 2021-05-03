module.exports={
    //Function to display team.ejs
    display:function(req, res) {
        let pageName="Team";
        res.render('../views/team', {pageName:pageName});
   },
}