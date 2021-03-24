var app = new Vue({
  el: '#root',
  data:{
    // imgSrc: '',
    index: 0,
    timer: 0,
    imgArray: [
      'https://picsum.photos/800',
      'https://picsum.photos/800/800',
      'https://picsum.photos/1600',
      'https://picsum.photos/600',
      'https://picsum.photos/700'
    ]
  },
  methods: {
    next: function () {
      if (this.index < this.imgArray.length - 1) {
        this.index++;
        this.resetPlay();

      } else{
         this.index = 0;
         this.resetPlay();
       }
    },
    prev: function (){
      if (this.index != 0) {
        this.index--;
      } else this.index = this.imgArray.length -1;
    },
    dotSelection: function(index){
      this.index = index;
    },
    autoplay: function(){
      let slides = this;
      this.timer = setInterval(function(){
        slides.next();
      }, 3000);
    },
    resetPlay: function() {
      clearInterval(this.timer);
      this.autoplay();
    },
  },
  created: function() {
    this.autoplay();
  }
});
