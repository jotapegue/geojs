$(document).ready(function (){
    let hcoords = []

    if ('geolocation' in navigator) {
    const watch = navigator.geolocation.watchPosition(function (position) {

      $('#latitude').html(position.coords.latitude)
      $('#longitude').html(position.coords.longitude)

      hcoords.push(position.coords.latitude)
      $('#hlatitude').html(hcoords)
    })

  } else {
    console.log('nao foi possivel acessar a api de localizacao')
  }
})
