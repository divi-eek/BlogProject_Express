class BlogController {
  static display = async (req, res) => {
    try {
      res.render("admin/Blog/display");
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = BlogController
