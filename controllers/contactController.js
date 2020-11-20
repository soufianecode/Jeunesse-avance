module.exports={
    //Function to display contact.ejs
    display:function(req, res) {
        let pageName="Contact";
        res.render('../views/contact', {pageName:pageName});
   },
   contact: function (req,res){
   },
}