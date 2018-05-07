// Generated by CoffeeScript 2.3.0
(function () {
  window.onload = function () {
    var center, galactic_center;
    paper.setup("myCanvas");
    center = paper.view.getCenter();
    galactic_center = new paper.Path(center, center.add([300, 0]));
    galactic_center.strokeColor = 'black';
    jQuery.getJSON("original_pulsars.json", function (data, status) {
      console.log(`Drawing original ${data.length} pulsars`);
      return _.each(data, function (pulsar) {
        return drawPulsar(pulsar, center);
      });
    });
    return paper.view.draw();
  };
}).call(this);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL29yaWdpbmFsLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsQ0FBQSxZQUFBO0FBQUEsU0FBQSxNQUFBLEdBQWdCLFlBQUE7QUFDYixRQUFBLE1BQUEsRUFBQSxlQUFBO0FBQUEsVUFBQSxLQUFBLENBQUEsVUFBQTtBQUNBLGFBQVMsTUFBTSxJQUFOLENBQUEsU0FBQSxFQUFUO0FBQ0Esc0JBQWtCLElBQUksTUFBSixJQUFBLENBQUEsTUFBQSxFQUF1QixPQUFBLEdBQUEsQ0FBVyxDQUFBLEdBQUEsRUFBbEMsQ0FBa0MsQ0FBWCxDQUF2QixDQUFsQjtBQUNBLG9CQUFBLFdBQUEsR0FBOEIsT0FBOUI7QUFDQSxXQUFBLE9BQUEsQ0FBQSx1QkFBQSxFQUF3QyxVQUFBLElBQUEsRUFBQSxNQUFBLEVBQUE7QUFDckMsY0FBQSxHQUFBLENBQVksb0JBQW9CLEtBQXBCLE1BQVosVUFBQTthQUNBLEVBQUEsSUFBQSxDQUFBLElBQUEsRUFBYSxVQUFBLE1BQUEsRUFBQTtlQUFXLFdBQUEsTUFBQSxFQUFBLE1BQUEsQztBQUF4QixPQUFBLEM7QUFGSCxLQUFBO1dBR0EsTUFBTSxJQUFOLENBQUEsSUFBQSxFO0FBUmEsR0FBaEI7Q0FBQSxFLElBQUEsQyxJQUFBIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm9ubG9hZCA9IC0+XG4gICBwYXBlci5zZXR1cChcIm15Q2FudmFzXCIpXG4gICBjZW50ZXIgPSBwYXBlci52aWV3LmdldENlbnRlcigpXG4gICBnYWxhY3RpY19jZW50ZXIgPSBuZXcgcGFwZXIuUGF0aCBjZW50ZXIsIGNlbnRlci5hZGQoWzMwMCwwXSlcbiAgIGdhbGFjdGljX2NlbnRlci5zdHJva2VDb2xvciA9ICdibGFjaydcbiAgIGpRdWVyeS5nZXRKU09OIFwib3JpZ2luYWxfcHVsc2Fycy5qc29uXCIsIChkYXRhLHN0YXR1cyktPlxuICAgICAgY29uc29sZS5sb2cgXCJEcmF3aW5nIG9yaWdpbmFsICN7ZGF0YS5sZW5ndGh9IHB1bHNhcnNcIlxuICAgICAgXy5lYWNoIGRhdGEsIChwdWxzYXIpLT4gZHJhd1B1bHNhciBwdWxzYXIsIGNlbnRlclxuICAgcGFwZXIudmlldy5kcmF3KClcbiJdLCJzb3VyY2VSb290IjoiLi4ifQ==
//# sourceURL=/Users/thomas/Documents/Projects/Creative/Tattoo/Pulsar map/js/original.coffee