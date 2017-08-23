function Port(weather){
    this._weather = weather
    this._ships = []
    this._CAPACITY = 8
}

Port.prototype = {
    getWeather: function(){
        return this._weather
    },

    embark: function(ship) {
       this._ships.push(ship)
    },

    getShips: function(){

        return this._ships
    },

    
    getCapacity: function(){
        return this._CAPACITY
    }
}