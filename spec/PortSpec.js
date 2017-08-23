describe('Port', function(){
    var weather
    var port 
    var ship

    beforeEach(function(){
        weather = new Weather()
        port = new Port(weather)
        ship = new Ship(port)
    })

    it('has weather', function(){
        expect(port.getWeather()).toBe(weather)
    })

    it('can embark ships', function () {
    port.embark(ship)

    expect(port.getShips()).toContain(ship)
    })

    it('has a capacity', function(){
        expect(port.getCapacity()).toBe(8)
    })
})