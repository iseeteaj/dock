describe('Ship', function(){

    var weather
    var port
    var arrivalPort
    var ship

    beforeEach(function () { 
        weather = new Weather()
        port = new Port(weather)
        arrivalPort = new Port()
        ship = new Ship(port)
    })

    it('has a starting port', function () {
        expect(ship.getCurrentPort()).toBe(port)
    })

    it('can set sail from the port', function () {
        spyOn(weather,'isStormy').and.returnValue(false)
        
        ship.setSail()

        expect(ship.getCurrentPort()).toBeFalsy()
    })

    it ('can dock at a port', function () {
        ship.dock(arrivalPort)

        expect(ship.getCurrentPort()).toBe(arrivalPort)
    })

    it('doesn\t set sail in stormy weather', function(){
        spyOn(weather, 'isStormy').and.returnValue(true)

        expect(function() {
            ship.setSail()
        }).toThrowError('cannot sail in stormy weather')
    })

    it('instructs the Port to embark', function(){
        spyOn(arrivalPort, 'embark')

        ship.dock(arrivalPort)

        expect(arrivalPort.embark).toHaveBeenCalledWith(ship)
    })

    it('doesn\'t dock if port at capacity', function(){
        for(var i = 0; i < 8; i++) {
            ship.dock(port)
        }

        expect(function(){
            ship.dock(port)
        }).toThrowError('port is at capacity')
    })

})