var app = angular.module('ngWork', []);

app.controller('MovieListController', function($scope){
  $scope.movies = [
    {
      video: "https://www.youtube.com/embed/R_F-lVhSfx8",
      title: 'Black Mass',
      img: "https://s-media-cache-ak0.pinimg.com/736x/7e/4a/8f/7e4a8f08cd3c5585dffefbfa6c95120d.jpg",
       info: {
         starring: 'Johnny Depp, Joel Edgerton, Benedict Cumberbatch, Kevin Bacon, Peter Sarsgaard, and etc.',
         gross: '62,563,543',
         oscars: 'No Oscar Nominations',
         type: 'Biography, Crime, Drama',
      },
      backgroundImg: "http://3.bp.blogspot.com/-zpq5EyuBx1A/VeSpAKjlccI/AAAAAAAAE_U/fG3Fgpj0MvQ/s1600/DJLIFE.png",
    },
     {
       video: "https://www.youtube.com/embed/6gryhSJxx7I",
       title: 'Trumbo',
       img: "http://cdn3-www.comingsoon.net/assets/uploads/gallery/trumbo/trumboposter.jpg",
       info: {
         starring: 'Bryan Cranston, Diane Lane, Helen Mirren, and etc.',
         gross: '7,852,878',
         oscars: 'Academy Awards Nomine for best Male Actor',
         type: 'Biography, Drama',
       },
       backgroundImg: "http://s3-img.goldderby.com/ck/images/Trumbo15.jpg",
     },
     {
      // video: "https://www.youtube.com/watch?v=tb_WgKDqPsE",
       title: 'Spotlight',
       img: "http://cdn02.cdn.justjared.com/wp-content/uploads/headlines/2015/08/rachel-mcadams-spotlight-poster.jpg",
       info: {
         starring: 'Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber, 	John Slattery, and etc.',
         gross: '39,121,520',
         oscars: 'Academy Awards Nomine: Best Director, Best Supporting Actress, Best Supporting Actor, Best Edditing; Academy Awards winner: Best Original Screenplay, Best Picture',
         type: 'Biography, Drama, History, Thriller',
       },
       backgroundImg: "http://media.npr.org/assets/img/2015/11/06/michael-keaton-as-walter-robby-robinson-liev-schreiber-as-marty-baron-mark-ruffalo-as-michael-rezendes-rachel-mcadams-as-sacha-pfieffer-john-slattery-as-ben-bradlee-jr-and-brian-d-arcy-james-as-matt-carroll-in-s_wide-f1d0aba2442df37f36bbd92174d8e062b50af17f-s900-c85.jpg",
     },
     {
       //video: "https://www.youtube.com/watch?v=6_UI1GzaWv0",
       title: 'The Hateful Eight',
       img: "http://dl9fvu4r30qs1.cloudfront.net/05/ea/4f64ae7d4bd0b3db2891cd30c525/the-hateful-eight-poster-2.jpg",
       info: {
         starring: 'Samuel L. Jackson, Kurt Russell, Jennifer Jason Leigh, Walton Goggins, and etc.',
         gross: '53,594,624',
         oscars: 'Academy Awards Nomine: Best Supporting Actress, Best Cinematography; Academy Awards winner: Best Original Score',
         type: 'Crime, Drama, Mystery, Thriller, Western',
       },
       backgroundImg: "http://az795576.vo.msecnd.net/bh-uploads/2016/01/H8_Featured-1050x525.jpg",
     },
     {
       //video: "https://www.youtube.com/watch?v=7JnC2LIJdR0",
       title: 'Bridge of Spies',
       img: "http://cdn.collider.com/wp-content/uploads/2015/06/bridge-of-spies-poster.jpg",
       info: {
         starring: 'Tom Hanks, Mark Rylance, and etc.',
         gross: '72,264,205',
         oscars: 'Awards Nomine: Best Original Screenplay, Best Picture, Best Art Direction, Best Sound, Best Original Score; Best Supporting Actor',
         type: 'Biography, Drama, Thriller',
       },
       backgroundImg: "https://arlenaharrow.files.wordpress.com/2015/11/bridge-of-spies-movie-poster.jpg?w=1000",
     },
     {
       //video: "https://www.youtube.com/watch?v=3wMzPztPavs",
       title: 'Son of Saul',
       img: "http://www.tribute.ca/tribute_objects/images/movies/Son_of_Saul/son-of-saul-poster-lg.jpg",
       info: {
         starring: 'Géza Röhrig and etc.',
         gross: '1,286,220',
         oscars: 'Academy Awards winner: Best Foreign Language Picture(Hungary)',
         type: 'Drama, Thriller',
       },
       backgroundImg: "http://hollywoodnewssource.com/wp-content/uploads/2016/01/maxresdefault.jpg",

     },
  ];
});
