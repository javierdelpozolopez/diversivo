$(function(){

  const bgMovil = new Image();
  const bgFondo = new Image();
  const bgWeb = new Image();
  const bgDesarrollo = new Image();

  bgMovil.src = '../assets/img/bg-movil.jpg';
  bgFondo.src = '../assets/img/bg-fondo.jpg';
  bgWeb.src = '../assets/img/bg-web.jpg';
  bgDesarrollo.src = '../assets/img/bg-desarrollo.jpg';

  const services = {
      'apps':{
          title:'Creamos video juegos y aplicaciones híbridas o para Android',
          desc:'Modernizamos tu flujo de trabajo con tecnología que facilita tu día a día',
          img: bgMovil
      },
      'rrss':{
          title:'Lleva tu marca a una fauna digital',
          desc:'Conéctate comparte, y manda uno que otro emoticon :).',
          img:bgFondo
      },
      'web':{
          title:'Creamos y administramos sitios web sin mentirle a nadie.',
          desc:'Desde sitios de alto tráfico a pequeñas pymes que quieren darse a conocer.',
          img:bgWeb
      },
      'software':{
          title:'Frontend y Backend a tus servicios.',
          desc:'Creamos y desarrollamos tecnología en base a tus necesidades.',
          img:bgDesarrollo
      }

  };

  $('.service').on('click mouseover', function(){
      console.log($(this));
      let description = services[$(this).attr('id')];
      $('#services h3').text(description.title);
      $('#services-desc h4').text(description.desc);
      let newImg = new Image;
      document.body.style.backgroundImage = `url('${description.img.src}')`;
  });
});