module.exports={
    //Function to display calendar.ejs
    display:function(req, res) {
        let pageName="Calendar";
        res.render('../views/calendar', {pageName:pageName});
   },
}