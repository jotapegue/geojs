$(document).ready(function (){
  console.log('ready')
    if ('geolocation' in navigator) {
    // navigator.geolocation.getCurrentPosition(function (position){
    //   console.log(position);
    // })
    const watch = navigator.geolocation.watchPosition(function (position) {
      console.log(position);
      $('#latitude').html(position.coords.latitude)
      $('#longitude').html(position.coords.longitude)
    })
  } else {
    console.log('nao foi possivel acessar a api de localizacao')
  }
})
