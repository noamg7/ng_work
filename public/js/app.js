var app = angular.module('ngWork', []);

app.controller('MovieListController', function($scope){
  $scope.movies = [
    {
      title: 'Black Mass',
      img: "https://s-media-cache-ak0.pinimg.com/736x/7e/4a/8f/7e4a8f08cd3c5585dffefbfa6c95120d.jpg",
      info: {
        starring: 'Johnny Depp, Joel Edgerton, Benedict Cumberbatch, Kevin Bacon, Peter Sarsgaard, and etc.',
        gross: 62563543,
        oscars: 0,
        type: 'Biography, Crime, Drama',
      },
      backgroundImg: "http://3.bp.blogspot.com/-zpq5EyuBx1A/VeSpAKjlccI/AAAAAAAAE_U/fG3Fgpj0MvQ/s1600/DJLIFE.png"
    },
    // {
    //   title: 'Trumbo',
    //   img: "http://cdn3-www.comingsoon.net/assets/uploads/gallery/trumbo/trumboposter.jpg",
    //   info: {
    //     starring: 'Bryan Cranston, Diane Lane, Helen Mirren, and etc.',
    //     gross: 7852878,
    //     oscars: 'Academy Awards Nomine for best Male Actor',
    //     type: 'Biography, Drama',
    //   },
    //   backgroundImg: "http://s3-img.goldderby.com/ck/images/Trumbo15.jpg",
    // },
    {}
  ];
});
