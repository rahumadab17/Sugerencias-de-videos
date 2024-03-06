const mostrarVideo = (() =>{
    function insertarVideo(url, id){
        var reproductor = document.getElementById(id);
        reproductor.setAttribute('src', url);
    }

    return function(url,id){
        insertarVideo(url, id)
    }
})();

class Multimedia{
    constructor(url){
        this._url = url;
    }

    get url(){
        return this._url;
    }

    set url(nuevo_URL){
        this._url = nuevo_URL
    }

    setInicio(){
        return "Este método es para realizar un cambio en la URL del video"
    }
}

class Reproductor extends Multimedia{
    constructor(url, id){
        super(url);
        this._id = id;
    }

    get id(){
        return this._id
    }

    playMultimedia(){
        return mostrarVideo(this._url, this.id)
    }

    setInicio(startTime){
        let newURL = `${this.url}&start=${startTime}`
        return this.url = newURL
    }
}

var reproductorMusica = new Reproductor('https://www.youtube.com/embed/HwmquP5-oko?si=vGFPqDt6bttY2wot', 'musica');

reproductorMusica.setInicio(30);
reproductorMusica.playMultimedia();

var reproductorVideo = new Reproductor('https://www.youtube.com/embed/n0AZ3ojo0vA?si=l9_Mv1E_4B7UXdDu', 'peliculas');

reproductorVideo.playMultimedia();

var reproductorSerie = new Reproductor('https://www.youtube.com/embed/wX5IIakmZIg?si=ylZwagMwu4Yp9tjk', 'series');

reproductorSerie.setInicio(180);
reproductorSerie.playMultimedia();