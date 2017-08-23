function Ship(port){
    this._currentPort = port
}

Ship.prototype = {
    getCurrentPort: function(){
        return this._currentPort
    },

    setSail: function(){
        if(this.getCurrentPort().getWeather().isStormy()){
            throw new Error('cannot sail in stormy weather')
        }
        this._currentPort = null

        return
    },

    dock: function(port){

        if(port.getShips().length + 1 > port.getCapacity()){
            throw new Error('port is at capacity')
        }
        this._currentPort = port

        port.embark(this)

        return
    }
}


